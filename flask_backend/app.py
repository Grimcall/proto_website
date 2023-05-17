from flask import Flask, request
from flask_mail import Mail, Message
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

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = mail_username
app.config['MAIL_PASSWORD'] = mail_password

mail = Mail(app)

@app.route('/submit', methods=['POST'])
def submit():
    form_data = request.form
    
    message = Message('Form Submission', sender = mail_username, recipients = [mail_username])
    
    message.body = 'Here is the form submission data:\n\nFirst Name: {}\nLast Name: {}\nEmail: {}\nMessage: {}'.format(
        form_data['first_name'], form_data['last_name'], form_data['email'], form_data['message'])

    mail.send(message)
    
    #Temp return value.
    return 'Form submitted successfully'


if __name__ == '__main__':
    app.run(debug=True)

