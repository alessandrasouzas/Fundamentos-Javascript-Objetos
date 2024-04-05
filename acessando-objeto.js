const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678900',
    turma: 'JavaScript'
};

function exibeInfoestudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(exibeInfoestudante(estudante, 'nome'));
console.log(exibeInfoestudante(estudante, 'cpf'));
