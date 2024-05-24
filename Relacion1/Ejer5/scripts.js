document.getElementById('Cadena').addEventListener('submit', function(event) {
    
    event.preventDefault();
    
    var CadenaTexto = document.getElementById("CadenaTexto").value;

    if (!/[a-zA-Z]/.test(CadenaTexto)) {
        alert("La cadena debe contener al menos una letra.");
        return;
    }
    
    function ComprobarCad(cadena) {
        if (cadena === cadena.toUpperCase() && /[A-Z]/.test(cadena)) {
            return "La cadena está en mayúsculas.";
        } else if (cadena === cadena.toLowerCase() && /[a-z]/.test(cadena)) {
            return "La cadena está en minúsculas.";
        } else {
            return "La cadena contiene una combinación de mayúsculas y minúsculas.";
        }
    }

    var CadResultado = ComprobarCad(CadenaTexto);
    
    document.getElementById("CadResultado").innerHTML = CadResultado;
});