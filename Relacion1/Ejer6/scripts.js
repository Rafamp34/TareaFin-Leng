document.getElementById('palindromo').addEventListener('submit', function(event) {
    
    event.preventDefault();
    var CadenaTexto = document.getElementById("CadenaTexto").value.trim();
    
    if (CadenaTexto === "") {
        alert("La cadena no debe estar vacía.");
        return;
    }
    
    function esPalindromo(cadena) {
        var CompCadena = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');
        var vueltaCadena = CompCadena.split('').reverse().join('');
        return CompCadena === vueltaCadena;
    }

    function generatePalindrome(cadena) {
        var vueltaCadena = cadena.split('').reverse().join('');
        return cadena + vueltaCadena;
    }

    var palinResultado;
    if (esPalindromo(CadenaTexto)) {
        palinResultado = "La cadena es un palíndromo.";
    } else {
        var generatedPalindrome = generatePalindrome(CadenaTexto);
        palinResultado = `La cadena no es un palíndromo. El palíndromo generado es: ${generatedPalindrome}`;
    }
    
    document.getElementById("palinResultado").innerHTML = palinResultado;
});