const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678900',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999990000','5511999991111']
};

estudante.endereco = {
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
}

console.log(`rua: ${estudante}\nnumero: ${estudante.endereco.numero}`);