const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678900',
    turma: 'JavaScript'
};

console.log(`turma: ${estudante.turma}`);
console.log(`os tres primeiros numeros do cpf: ${estudante.cpf.substring(0,3)}`);