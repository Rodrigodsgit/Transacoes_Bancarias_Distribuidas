class VectorClock:
    def __init__(self):
        self.clock = {}

    def increment(self, event):
        if event not in self.clock:
            self.clock[event] = 0
        self.clock[event] += 1

    def compare(self, other):
        for event in self.clock:
            if event not in other.clock:
                return 1
            if self.clock[event] < other.clock[event]:
                return -1
            if self.clock[event] > other.clock[event]:
                return 1
        for event in other.clock:
            if event not in self.clock:
                return -1
        return 0

    def sync(self, other):
        for event in other.clock:
            if event not in self.clock or other.clock[event] > self.clock[event]:
                self.clock[event] = other.clock[event]

    def value(self):
        return self.clock

# Criando dois relógios vetoriais
clock1 = VectorClock()
clock2 = VectorClock()

# Incrementando o relógio 1
clock1.increment('Nubank')
clock1.increment('Nubank')

# Incrementando o relógio 2
clock2.increment('Nubank')

# Comparando os relógios
result = clock1.compare(clock2)
print(result)

# Sincronizando os relógios

print(clock1.value())
print(clock2.value())

# Se clock1 < clock2 > 0
# se clock1 > clock2 < 0
# Se clock1 = clock2 = 0



from flask import Flask, jsonify, request
import threading
from time import sleep

app = Flask(_name_)

# Dicionário para controlar o status de bloqueio por ID
bloqueio_por_id = {}

@app.route('/endpoint', methods=['POST'])
def endpoint():
    id = request.json.get('id')

    # Verifica se o ID está bloqueado
    if id in bloqueio_por_id and bloqueio_por_id[id].locked():
        return jsonify({'message': 'Operação em andamento. Tente novamente mais tarde.'}), 409

    # Inicia o bloqueio para o ID
    bloqueio_por_id[id] = threading.Lock()
    bloqueio_por_id[id].acquire()
    sleep(20)

    try:
        # Lógica de processamento do POST aqui
        # ...

        # Liberar o bloqueio após o processamento
        bloqueio_por_id[id].release()
        return jsonify({'message': 'POST processado com sucesso.'}), 200
    except Exception as e:
        # Em caso de erro, liberar o bloqueio também
        bloqueio_por_id[id].release()
        return jsonify({'message': 'Erro no processamento do POST.'}), 500

if _name_ == '_main_':
    app.run()