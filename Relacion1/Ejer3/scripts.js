document.getElementById('Triangulo').addEventListener('submit', function(event) {
    
    event.preventDefault();
    
    var ladoa = parseFloat(document.getElementById("ladoa").value);
    var ladob = parseFloat(document.getElementById("ladob").value);
    var ladoc = parseFloat(document.getElementById("ladoc").value);

    if (isNaN(ladoa) || isNaN(ladob) || isNaN(ladoc)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }
    
    function saberTipTriangulo(a, b, c) {
        if (a === b && b === c) {
            return "Equilátero";
        } else if (a === b || b === c || a === c) {
            return "Isósceles";
        } else {
            return "Escaleno";
        }
    }

    var tipTriangulo = saberTipTriangulo(ladoa, ladob, ladoc);
    
    document.getElementById("tipTriangulo").innerHTML = `El triángulo es ${tipTriangulo}.`;
});