// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

// Calcula a posição final do herói somando a posição inicial aos total de passos
const posicaoFinal = posicaoInicial + totalPassos;

// Imprime a posição final
print("Posicao final do heroi:", posicaoFinal);