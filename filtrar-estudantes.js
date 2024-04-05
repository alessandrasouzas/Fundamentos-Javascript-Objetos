const estudantes = require('./estudantes.json');

function filtrarPorPropriedade(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

const listaEnderecosIncompletos = filtrarPorPropriedade(estudantes, 'cep');

console.log(listaEnderecosIncompletos);