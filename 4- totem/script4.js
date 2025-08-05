function mostrar() {
    document.getElementById('acompanhamentos').classList.toggle('hidden');
}

function finalizar() {
    const ids = ["maionese", "carne", "queijo", "bacon", "salada"];
    let escolhidos = [];

    ids.forEach(id => {
        if (document.getElementById(id).checked) {
            escolhidos.push(document.getElementById(id).value);
        }
    });
    let valorAcompanhamentos = escolhidos.length * 2;

    let sanduiche = document.getElementById("sanduiche").value;
    let valorSanduiche;
    let funciona = true;
    
    if (sanduiche == "hamburguer"){
        valorSanduiche = 10;
    } else if (sanduiche == "cheeseburguer") {
        valorSanduiche = 15;
    } else if (sanduiche == "cheesebacon") {
        valorSanduiche = 21;
    } else if (sanduiche == "duplo Cheeseburguer"){
        valorSanduiche = 20;
    } else {
        alert("Por favor escolha o seu sanduiche primeiro!");
        funciona = false
    }

    let valorTotal = valorAcompanhamentos + valorSanduiche;
    document.getElementById("total").innerHTML = valorTotal;
    if (funciona) {
        confirm("O seu pedido ficou assim: " + sanduiche + " mais adicionais de " + escolhidos.join(", ") + ". Valor total a pagar R$" + valorTotal);
    }  
}

