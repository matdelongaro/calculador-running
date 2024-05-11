function calcularRitmo(){
    let distancia = parseFloat(document.getElementById('distance').value);
    let tiempo = parseFloat(document.getElementById('time').value);
    let ritmo = tiempo/distancia;
    let minutosPorKm = Math.floor(ritmo);
    let segundosExtra = Math.floor((ritmo - minutosPorKm) * 60 );
    document.getElementById('resultado').innerHTML = `Tu ritmo es de ${minutosPorKm}:${segundosExtra} `
}

function reset(){
    document.getElementById('distance').value = ''
    document.getElementById('time').value = ''
    document.getElementById('resultado').innerHTML = ``
}