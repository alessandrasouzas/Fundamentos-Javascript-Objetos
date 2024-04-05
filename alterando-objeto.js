const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678900',
    turma: 'JavaScript'
};

estudante.telefone = '5511912341234'

console.log(estudante['telefone']);

delete estudante.telefone;
console.log(estudante);
