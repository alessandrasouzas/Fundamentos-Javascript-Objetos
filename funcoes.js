const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678900',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999990000','5511999991111'],
    media: 7.5,
    estaAprovado: function(mediaBase){
        return this.media >= mediaBase ? 'Aprovado' : 'Reprovado'
    }
};

console.log(estudante.estaAprovado(7));
