function calculo() {
    let total = parseInt(document.getElementById("alunos").value);
    let pcd = parseInt(document.getElementById("alunos_pcd").value);
    let soma = total + pcd;
    let percentual = parseInt(pcd / soma * 100);
    
    document.getElementById("total_alunos").innerHTML = soma 
    document.getElementById("percentual_pcd").innerHTML = percentual
}