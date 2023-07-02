function greenfee(){
var nombre = document.getElementById("nombre").value
var edad = document.getElementById("edad").value
var socio = document.getElementById("socio").checked
var resultadof
resultadof = parseInt(resultadof)

var jugadores = document.getElementsBy(personas).value

edad = parseInt(edad)
if (isNaN(edad)){
    alert("Debe ingresae un numero")
}
if(edad > 35){
    resultadof = 3000
}else{
    resultadof = 2500
} 


if (socio){
    resultadof = resultadof /2
}
document.getElementById("resultadof").innerHTML ="El precio a pagar de "+ nombre + "es" + resultadof;
}   