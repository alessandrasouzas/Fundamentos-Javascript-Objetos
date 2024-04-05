const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678900',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999990000','5511999991111'],
    enderecos : [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    }]
};

estudante.enderecos.push ({
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: null
})

console.log(estudante);

const listaEnderecosComComplemento = estudante.enderecos.filter((endereco) => endereco.complemento);
console.log(listaEnderecosComComplemento);