from flask import Flask, request
from flask_cors import CORS
import json
import threading

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/registerUser', methods=['POST'])
def register_user():
    pass

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