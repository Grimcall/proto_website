from flask import Flask, request
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

mail_username = "N/A"
mail_password = "N/A"

with open('mail_data.txt', 'r') as config:
    for line in config:
        key, value = line.strip().split('=')
        if key == 'EMAIL':
            mail_username = value
        elif key == 'PASSWORD':
            mail_password = value

print(mail_username)
print(mail_password)

try:
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(mail_username, mail_password)

    print("Login successful.")
except Exception as e:
    print(str(e))

@app.route('/submit', methods=['POST'])
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

    server.sendmail(mail_username, mail_username, message.as_string())
    #Temp return value.
    return 'Form submitted successfully'


if __name__ == '__main__':
    app.run(debug=True)

