document.getElementById('Calculadora').addEventListener('submit', function(event) {
    
    event.preventDefault();
    var radio = parseFloat(document.getElementById("radio").value);
    
    var circunferencia = 2 * Math.PI * radio;
    var area = Math.PI * Math.pow(radio, 2);
    var volumen = (4/3) * Math.PI * Math.pow(radio, 3);
    
    document.getElementById("circunferencia").innerHTML = "Longitud de la circunferencia: " + circunferencia.toFixed(2);
    document.getElementById("area").innerHTML = "Área del círculo: " + area.toFixed(2);
    document.getElementById("volumen").innerHTML = "Volumen de la esfera: " + volumen.toFixed(2);

    return false;

});