function calculo() {
    let valor = parseFloat(document.getElementById("venda").value);
    let pagamento = document.getElementById("pagamento").value;
    
    if (pagamento == "avista") {
        valor = valor * 0.95;
    } 

    document.getElementById("resultado_venda").innerHTML = valor;
    let confirma = confirm("O valor total da compra foi " + valor + " deseja confirmar a compra?");
    if (confirma) {
        alert("Compra realizada com sucesso!")
    } else {
        alert("Compra recusada.")
    }
}