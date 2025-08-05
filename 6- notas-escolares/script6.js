class Cadastro {
    constructor(nome, nota1, nota2, nota3, nota4) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
        this.media = (nota1 + nota2 + nota3 + nota4) / 4
    }
}
let alunos = [];

function cadastrar() {
    let _nome = document.getElementById("nome").value.trim();
    let _nota1 = parseFloat(document.getElementById("primeiro").value);
    let _nota2 = parseFloat(document.getElementById("segundo").value);;
    let _nota3 = parseFloat(document.getElementById("terceiro").value);;
    let _nota4 = parseFloat(document.getElementById("quarto").value);;
    let aluno = new Cadastro(_nome, _nota1, _nota2, _nota3, _nota4);

    alunos.push(aluno);

    document.getElementById("nome").value = "";
    document.getElementById("primeiro").value = "";
    document.getElementById("segundo").value = "";
    document.getElementById("terceiro").value = "";
    document.getElementById("quarto").value = "";

    alert("Nome cadastrado com sucesso!");
    
}

function mostrar() {
    let texto = "";

    for (let i = 0; i < alunos.length; i++) {
        texto += "<li>" + alunos[i].nome + " - Média: " + alunos[i].media.toFixed(2) + "</li>";
    }

    document.getElementById("lista_alunos").innerHTML = texto;
}