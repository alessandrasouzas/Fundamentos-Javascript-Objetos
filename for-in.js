const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678900',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999990000','5511999991111'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    },
    {   
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: null
    }]
}

for (let chave in estudante){
    const tipo = typeof estudante[chave];
    if(tipo !== 'object' && tipo !== 'function'){
        const texto = `A chave ${chave}: Tem o valor ${estudante[chave]}`
        console.log(texto);
    }
}