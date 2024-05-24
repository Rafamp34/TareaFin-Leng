const months = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

document.getElementById('Meses').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var ElegirMes = parseInt(document.getElementById("ElegirMes").value);
    var NomMes = months[ElegirMes - 1];
    
    document.getElementById("NomMes").innerHTML = `El mes seleccionado es: ${NomMes}`;
});