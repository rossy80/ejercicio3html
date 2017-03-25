function convertirCelsius(){
var numeroDado = parseInt(document.getElementById("fahrenheit").value);
var celsius = ((numeroDado * 9)/5) + 32;
document.getElementById("celsius").value = celsius;
}

function convertirFahrenheit(){
  var numeroDado = parseInt(document.getElementById("celsius").value);
  var fahrenheit = ((numeroDado - 32)*5) / 9;
  document.getElementById("fahrenheit").value = fahrenheit;
}
