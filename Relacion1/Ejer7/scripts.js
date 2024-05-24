document.getElementById('Division').addEventListener('submit', function(event) {

    event.preventDefault();
    
    var dividendo = parseInt(document.getElementById("dividendo").value);
    var divisor = parseInt(document.getElementById("divisor").value);

    if (isNaN(dividendo) || isNaN(divisor) || dividendo < 1 || divisor < 1) {
        alert("Por favor, ingrese números enteros positivos.");
        return;
    }
    
    function DivisionEculides(dividendo, divisor) {
        var cociente = Math.floor(dividendo / divisor);
        var resto = dividendo % divisor;
        return { cociente: cociente, resto: resto };
    }

    var resultadoDivision = DivisionEculides(dividendo, divisor);
    
    document.getElementById("cociente").innerHTML = `Cociente: ${resultadoDivision.cociente}`;
    document.getElementById("resto").innerHTML = `Resto: ${resultadoDivision.resto}`;
});