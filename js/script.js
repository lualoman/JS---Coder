/*HANDS ON 1
let nombreUsuario = prompt('Escribí tu nombre');
let alturaUsuario = parseFloat (prompt('Ingresa tu altura'));

alert('Tu nombre es '+nombreUsuario+' y tu altura es '+alturaUsuario+' mts')*/



/*HANDS ON 2
Ejemplo 1:
let mayorQueMil = 1000;
let numeroEntero = parseInt (prompt('Ingresa un numero entero'));

if (numeroEntero > mayorQueMil) {
    alert('Tu numero ingresado es MAYOR a 1000');
}else if(numeroEntero == mayorQueMil){
    alert('Tu numero ingresado es IGUAL a 1000');
}else{
    alert('Tu numero ingresado es MENOR a 1000');
}


Ejemplo 2:
let numeroDiez = 10;
let numeroCincuenta = 50;
let numeroEntero = parseInt (prompt('Ingresa un numero entero entre 10 y 50'));

if (numeroEntero > numeroDiez && numeroEntero < numeroCincuenta) {
    alert('Tu numero ingresado esta entre 10 y 50');
}else{
    alert('Tu numero ingresado es NO se encuentra entre 10 y 50');
}*/





/*1ER DESAFIO COMPLEMENTARIO
for (let i = 1; i <=3; i++) {
    let ingresarNumero = parseInt(prompt("Ingresa un numero"));
    alert ("Hola numero"+" "+ingresarNumero);
}

let añoDeNacimiento = parseInt(prompt("Ingresa tu año de nacimiento"));

while (añoDeNacimiento>2000) {
    alert("Veras tu permitso ingresando a la consola")
    console.log("¡Acceso denegado! Solo se permiten mayores de 21 años.");
    añoDeNacimiento = prompt("Ingresa tu año de nacimiento");
}

alert("Sos mayor de 21 años, ¡Acceso concedido!")*/

let nombreUnico = "Homero";

let nombreClub = prompt("¿Que nombre de niño era aceptado solo una vez en el Club de los NO Homeros?")

while (nombreClub != nombreUnico) {
    alert("Nombre incorrecto, ¡Simpsonizate!");
    nombreClub = prompt("¿Que nombre de niño era aceptado solo una vez en el Club de los NO Homeros?");
}

alert("Excelente...Solo se permite UN Homero");

