from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({"message": "Sup"})


@app.route('/translate')
def translate():
   translate = {
  
    'en':{

    },
  
    'es' : {

    }
  
   }
   return jsonify(translate)

if __name__ == '__main__':
    app.run(debug=True)

