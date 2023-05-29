from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_limiter import RateLimitExceeded

app = Flask(__name__)
CORS(app)
limiter = Limiter(
    get_remote_address,
    app=app,
)

mail_username = "N/A"
mail_password = "N/A"

with open('mail_data.txt', 'r') as config:
    for line in config:
        key, value = line.strip().split('=')
        if key == 'EMAIL':
            mail_username = value
        elif key == 'PASSWORD':
            mail_password = value

with open('recaptchaKeys.txt', 'r') as recaptchaKeys:
    for line in recaptchaKeys:
        key, value = line.strip().split('=')
        if key == 'SITEKEY':
            recaptcha_sitekey = value
        elif key == 'SECRETKEY':
            recaptcha_secretkey = value

print("EMAIL:" + mail_username)
print("PASSWORD:" + mail_password)
print("SITEKEY:" + recaptcha_sitekey)
#print("SECRETKEY:" + recaptcha_secretkey)

try:
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(mail_username, mail_password)

    print("Login successful.")
except Exception as e:
    print(str(e))

@app.errorhandler(RateLimitExceeded)
def handle_limit_exceeded(e):
    error_msg = "Too many requests in a short period of time, please try again later."
    error_msg_es = "Muchas peticiones en un corto periodo de tiempo, por favor inténtelo más tarde."

    return jsonify(error=error_msg), 429

@app.route('/submit', methods=['POST'])
@limiter.limit("10/minute")
def submit():
    form_data = request.json
    
    print(form_data)

    message = MIMEMultipart()
    message['From'] = mail_username
    message['To'] = mail_username
    message['Subject'] = "Test"

    body = 'Here is the form submission data:\n\nFirst Name: {}\nLast Name: {}\nEmail: {}\nPhone: {}\nMessage: {}'.format(
        form_data['first_name'], 
        form_data['last_name'], 
        form_data['email'], 
        form_data['phone'], 
        form_data['message'])

    message.attach(MIMEText(body, 'plain'))

    server.sendmail(from_addr = mail_username, 
                    to_addrs = mail_username, 
                    msg = message.as_string())
    
    answer = MIMEMultipart()
    answer['From'] = mail_username
    answer['To'] = form_data['email']
    answer['Subject'] = "Thank you for reaching out!"

    answer_body = "Thank you for reaching out {}! I will get back to you as soon as posible.\nYou can also find me on: ".format(form_data['first_name'])

    answer.attach(MIMEText(answer_body, 'plain'))
    server.sendmail(from_addr = mail_username,
                    to_addrs = form_data['email'],
                    msg = answer.as_string())

    #Temp return value.
    return jsonify("Success", 200)

if __name__ == '__main__':
    app.run(debug=True)

