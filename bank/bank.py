from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import threading

data = {}
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/registerUser', methods=['POST'])
def register_user():
    try:
        cpf = request.form.get('cpf')
        account = data.get(cpf, False)
        if not account:
            new_account = {
                "type": request.form.get('type'),
                "name1": request.form.get('name1'),
                "email1": request.form.get('email1'),
                "password1": request.form.get('password1'),
                "name2": request.form.get('name2'),
                "email2": request.form.get('email2'),
                "password2": request.form.get('password2')
            }
            data[cpf] = new_account
            return jsonify({"success": True})
        else:
            return jsonify({"success": False})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})


@app.route('/signIn', methods=['GET'])
def sign_in():
    pass

@app.route('/getUsers', methods=['GET'])
def get_users():
    pass

@app.route('/trasaction', methods=['POST'])
def transaction():
    pass

@app.route('/payment', methods=['POST'])
def payment():
    pass

@app.route('/route', methods=['POST'])
def deposit():
    pass

if __name__ == '__main__':
    
    door = int(input("Enter the bank port: "))
    t1 = threading.Thread(target=app.run, kwargs={'host':'0.0.0.0','port': door})
    t1.start()
    t1.join()