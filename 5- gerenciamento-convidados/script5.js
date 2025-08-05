const limite = 10;
let convidados = [];

function cadastrar() {
    let nome = document.getElementById("convidado").value.trim();

    if (convidados.length >= limite) {
        alert("o limite de convidados foi atingido");
    } else {
        convidados.push(nome);
        document.getElementById("convidado").value = "";
    }
}

function remover() {
    let nomeRemovido = prompt("Qual nome você deseja remover?");
    let index = convidados.indexOf(nomeRemovido);

    if (index !== -1) { 
        convidados.splice(index, 1);
        alert("Convidado " + nomeRemovido + " removido.");
    } else {
        alert("O nome " + nomeRemovido + " não está na lista.");
    }
}

function mostrar() {
    let lista = "";
    for (let i = 0; i < convidados.length; i++) {
        lista += "<li>" + convidados[i] + "</li>";
    }
    document.getElementById("lista_convidados").innerHTML = lista;
}
