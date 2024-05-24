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

function changeToDarkMode() {
    document.getElementById('mainStylesheet').setAttribute('href', 'dark-mode.css');
}

function changeTolightMode() {
    document.getElementById('mainStylesheet').setAttribute('href', 'light-mode.css');
}

    document.getElementById("darkModeBtn").addEventListener("click", changeToDarkMode);
    document.getElementById("lightModeBtn").addEventListener("click", changeTolightMode);