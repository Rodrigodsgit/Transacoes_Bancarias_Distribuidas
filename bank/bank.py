from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import threading
import requests

global name
data = {}
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
session = [
    "http://127.0.0.1:5001",
    "http://127.0.0.1:5002",
    "http://127.0.0.1:5003"
]

def check_balance(account, value):
    accountBalance = account.get("balance")
    if accountBalance >= value:
        return True
    else:
        return False
    
@app.route('/balanceValid', methods=['POST'])
def balance_Isvalid():
    try:
        cpf = request.json.get('cpf')
        value = request.json.get('value')
        account = data.get(cpf)
        return jsonify({"success": check_balance(account,value)})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})
    
@app.route('/balance', methods=['POST'])
def balanced():
    try:
        cpf = request.json.get('cpf')
        account = data.get(cpf)
        return jsonify({"balance": account.get('balance')})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})

@app.route('/registerUser', methods=['POST'])
def register_user():
    try:
        request_data = request.get_json()
        cpf = request_data.get('cpf')
        account = data.get(cpf, False)
        if not account:
            new_account = {
                "type": request_data.get('type'),
                "name1": request_data.get('name1'),
                "email1": request_data.get('email1'),
                "password1": request_data.get('password1'),
                "name2": request_data.get('name2'),
                "email2": request_data.get('email2'),
                "password2": request_data.get('password2'),
                "balance": 100
            }
            data[cpf] = new_account
            return jsonify({"success": True})
        else:
            return jsonify({"success": False})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})

@app.route('/signIn', methods=['POST'])
def sign_in():
    try:
        request_data = request.get_json()
        cpf = request_data.get('cpf')
        account = data.get(cpf, False)
        if account:
            email_form = request_data.get('email')
            password_form = request_data.get('password')

            email_data1 = account.get('email1')
            password_data1 = account.get('password1')

            email_data2 = account.get('email2')
            password_data2 = account.get('password2')

            if email_form == email_data1 and password_form == password_data1:
                return jsonify({"success": True})
            elif email_form == email_data2 and password_form == password_data2:
                return jsonify({"success": True})

        return jsonify({"success": False})
    
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})

@app.route('/trasactionIn', methods=['POST'])
def transaction():
    try:
        cpf = request.json.get('cpf')
        cpfRec = request.json.get('cpfRec')
        account = data.get(cpf)
        accountRec = data.get(cpfRec)
        value = float(request.json.get('value'))
        if (check_balance(account, value)):
            account['balance'] -=  value
            accountRec['balance'] += value
            return jsonify({"success": True})
        else:
            return jsonify({"success": False, "error": "value insufficient"})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})

@app.route('/payment', methods=['POST'])
def payment():
    try:
        cpf = request.json.get('cpf')
        value = request.json.get('value')
        account = data.get(cpf)
        if (check_balance(account, value)):
            account['balance'] -=  value
            return jsonify({"success": True})
        else:
            return jsonify({"success": False, "error": "value insufficient"})
    except Exception as e:
        return jsonify({"sucess": False, "error": str(e)})
    
@app.route('/deposit', methods=['POST'])
def deposit():
    try:
        cpf = request.json.get('cpf')
        value = request.json.get('value')
        account = data.get(cpf)
        account['balance'] += value
        return jsonify({"success": True})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})

@app.route('/transactionEx', methods=['POST'])
def transactionEx():
    try:
        banks = request.json.get('banks')
        destiny = request.json.get('destiny')
        cpf = request.json.get('cpf')
        validation = []
        url = None
        for bank in banks:
            if bank[0] == "bankA":
                url = session[0]
            elif bank[0] == "bankB":
                url = session[1]
            elif bank[0] == "bankC":
                url = session[2]
            
            data = {
                "cpf": bank[1],
                "value": bank[4]
            
            }
            url = url + "/balanceValid"
            response = requests.post(url, json=data)
            if response.status_code == 200:
                response_data = response.json()
                success = response_data.get('success')
                validation.append(success)
            else:
                print('Erro:', response.status_code)

        result = all(validation)
        if result:
            transfer = 0
            for bank in banks:
                if bank[0] == "bankA":
                    url = session[0]
                elif bank[0] == "bankB":
                    url = session[1]
                elif bank[0] == "bankC":
                    url = session[2]
                
                data = {
                    "cpf": bank[1],
                    "value": bank[4]
                
                }
                url = url + "/payment"
                response = requests.post(url, json=data)
                if response.status_code == 200:
                    response_data = response.json()
                    #success = response_data.get('success')
                    print(response_data)
                else:
                    print('Erro:', response.status_code)
                
                transfer += bank[4]
            
            if destiny == "bankA":
                url = session[0]
            elif destiny == "bankB":
                url = session[1]
            elif destiny == "bankC":
                url = session[2]
            
            url = url + "/deposit"
            data = {
                "cpf": cpf,
                "value": transfer
            }
            response = requests.post(url, json=data)
            return jsonify({"success": True})
        else:
            return jsonify({"success": False, "error": "value insufficient"})

    except Exception as e:
        return jsonify({"success": False, "error": str(e)})
    



if __name__ == '__main__':
    door = int(input("Enter the bank port: "))
    t1 = threading.Thread(target=app.run, kwargs={'host':'0.0.0.0','port': door})
    t1.start()
    t1.join()