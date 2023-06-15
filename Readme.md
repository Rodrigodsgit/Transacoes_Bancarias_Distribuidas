Formato /registerUser

{
    "cpf": 10000000000,
    "type": "Conjunta",
    "name1": "Pedro",
    "email1": "pedro@gmail.com",
    "password1": "12345",
    "name2": "Maria",
    "email2": "maria@gmail.com",
    "password2": "12345"
}

Formato /signIn

{
    "cpf": 10000000000,
    "email": "maria@gmail.com",
    "password": "12345"
}

Formato /trasactionIn

{
    "cpf": 10000000000,
    "cpfRec": 20000000000,
    "value": 10
}

Formato /deposit

{
    "cpf": 10000000000,
    "value": 10
}

Formato /trasactionEx

{
    "banks":[
        ["bankA", 10000000000, "pedro@gmail.com", 12345, 10], 
        ["bankB", 10000000000, "pedro@gmail.com", 12345, 20]
    ]
    "destiny": "bankC"
    "cpf": 10000000000
}

