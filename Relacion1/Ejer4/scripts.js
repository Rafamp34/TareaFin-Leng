document.getElementById('DNI').addEventListener('submit', function(event) {
    
    event.preventDefault();
    
    var NumDNI = document.getElementById("NumDNI").value;
    
    if (!/^\d{7,8}$/.test(NumDNI)) {
        alert("Por favor, ingrese un número de DNI válido de 7 u 8 dígitos.");
        return;
    }
    
    function calularLetra(dni) {
        var letters = "TRWAGMYFPDXBNJZSQVHLCKE";
        return letters[dni % 23];
    }

    var LetraDNI = calularLetra(NumDNI);
    
    document.getElementById("LetraDNI").innerHTML = `La letra correspondiente a su DNI es ${LetraDNI}.`;
});