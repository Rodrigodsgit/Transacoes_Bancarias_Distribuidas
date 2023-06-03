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
