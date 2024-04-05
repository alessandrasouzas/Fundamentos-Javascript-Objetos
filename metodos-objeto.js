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

// delete estudante.enderecos;

const chavesObjeto = Object.keys(estudante);
const valuesObjeto = Object.values(estudante);
const entriesObjeto = Object.entries(estudante);

console.log(`chaves: ${chavesObjeto}\n`);
console.log(`values: ${valuesObjeto}\n`);
console.log(`entries: ${entriesObjeto}`);

if(!chavesObjeto.includes('enderecos')){
    console.error('É necessario ter um endereco cadastrado');
}