const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEcontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
// console.log(estudanteEcontrado);

const estudanteTelefone = buscaInformacao(estudantes, 'telefone', '11998123183');
console.log(estudanteTelefone);