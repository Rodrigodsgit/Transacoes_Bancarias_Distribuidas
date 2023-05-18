def determinar_ordem_vetorial(rel_vet_A, rel_vet_B, rel_vet_C):
    for i in range(len(rel_vet_C)):
        if rel_vet_A[i] < rel_vet_C[i]:
            return "A ocorreu antes de B"
        elif rel_vet_B[i] < rel_vet_C[i]:
            return "B ocorreu antes de A"
    return "A e B ocorreram simultaneamente ou têm a mesma ordem"

# Exemplo de relógios vetoriais
rel_vet_A = [1, 0]
rel_vet_B = [0, 1]
rel_vet_C = [1, 1]

resultado = determinar_ordem_vetorial(rel_vet_A, rel_vet_B, rel_vet_C)
print(resultado)
