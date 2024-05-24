document.getElementById('MCD').addEventListener('submit', function(event) {

    event.preventDefault();
    
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2) || num1 < 1 || num2 < 1) {
        alert("Por favor, ingrese números enteros positivos.");
        return;
    }
    
    function euclideMCD(a, b) {
        while (b !== 0) {
            var temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    var mcd = euclideMCD(num1, num2);
    
    document.getElementById("ResultadoMCD").innerHTML = `El Máximo Común Divisor (MCD) de ${num1} y ${num2} es: ${mcd}`;
});