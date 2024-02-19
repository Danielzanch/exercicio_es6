//• Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;

class Aluno{

    constructor(nomeDoAluno, notaDoAluno){
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
};

const alunos = [
    new Aluno('João', 7),
    new Aluno('José', 8),
    new Aluno('mMrta', 5),
    new Aluno('Maria', 4)
];

console.log(alunos);



//• Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;

function alunosAprovados(alunos) {
    const Aprovados = [];

    alunos.map((aluno) => {
        if(aluno.nota >= 6) {
            Aprovados.push(aluno)
        }
    });
    return Aprovados;
};

const Aprovados = alunosAprovados(alunos);
console.log(Aprovados);


//• Crie uma branch exercicio_es6 no repositório do curso, armazene o código nesta branch e nos envie o link através da plataforma. 
