function calculo() {
    let distancia = parseFloat(document.getElementById("distancia").value);
    let gasolina = parseFloat(document.getElementById("consumo").value);
    let preco = parseFloat(document.getElementById("preco").value);
    let passageiros = parseInt(document.getElementById("passageiros").value);
    let consumo = distancia / gasolina;
    let custo = consumo * preco;
    let custo_pessoa = custo / passageiros;
    
    document.getElementById("resultado_gasolina_litros").innerHTML = consumo; 
    document.getElementById("resultado_custo").innerHTML = custo;
    document.getElementById("resultado_custo_pessoa").innerHTML = custo_pessoa;
}