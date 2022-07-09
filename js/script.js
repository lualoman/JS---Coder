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

for (let i = 0; i <= 3; i++) {
    let ingresarNumero = parseInt(prompt("Ingresa un numero"));
    alert ("Hola numero"+" "+ingresarNumero);
}



let añoDeNacimiento = parseInt(prompt("Ingresa tu año de nacimiento"));

if(añoDeNacimiento>2001) {
    alert("Veras tu permiso ingresando a la consola")
    console.log("¡Acceso denegado! Solo se permiten mayores de 21 años."); 
}else {
    alert("Sos mayor de 21 años, ¡Acceso concedido!")
}



let nombreUnico = "Homero";

let nombreClub = prompt("¿Que nombre de niño era aceptado solo una vez en el Club de los NO Homeros?")

while (nombreClub != nombreUnico) {
    alert("Nombre incorrecto, ¡Simpsonizate!");
    nombreClub = prompt("¿Que nombre de niño era aceptado solo una vez en el Club de los NO Homeros?");
}

alert("Excelente...Solo se permite UN Homero");
*/




/*1ER DESAFIO OBLIGATORIO*/
let edadUsuario = parseInt(prompt("Ingresa tu edad"));

if(edadUsuario >= 18) {
    alert("Bienvenid@ a ¡Coco Loco!");
}else if(edadUsuario < 18){
    alert("Debes tener al menos 18 años para acceder a este sitio");
}else{
    alert("Ingresaste un dato inválido");
}



if(edadUsuario >=18){
    let comboFernet = 1780;
    let comboGancia = 1420;
    let comboCampari = 1650;

    let opcion = prompt("¡Elegi tu combo de bebidas!: \n1. Fernet 1LT+ Coca 3LT = $1780 \n2. Gancia 1LT+ Sprite 3LT = $1420 \n3. Campari 1LT+ Citric 3LT = $1650 \n Presiona ESC para Cancelar");

    while(opcion!="ESC"){
        switch (opcion) {
            case "1":
                let compraFernet = parseInt(prompt("Ahorremos agua, ¡tomemos fernet! Ingresa la cantidad de combos que deseas comprar"));

                for(i=0; 0<=i; i--){
                let compraFinalFernet = comboFernet*compraFernet;
                alert("Tu compra final tiene un valor de $"+compraFinalFernet);
                }
                break;

            case "2":
                let compraFinalGancia = true;
                let compraGancia = parseInt(prompt("¡Que elegancia la del Gancia! Ingresa la cantidad de combos que deseas comprar"));

                for(i=0; 0<=i; i--){
                compraFinalGancia = comboGancia*compraGancia;
                alert("Tu compra final tiene un valor de $"+compraFinalGancia);
                compraFinalGancia = false;
                }
                break;

            case "3":
                let compraFinalCampari = true;
                let compraCampari = parseInt(prompt("¡Siga el party con el Campari! Ingresa la cantidad de combos que deseas comprar"));

                for(i=0; 0<=i; i--){
                compraFinalCampari = comboCampari*compraCampari;
                alert("Tu compra final tiene un valor de $"+compraFinalCampari);
                compraFinalCampari = false;
                }
                break;

            default:
                alert("elegiste una opcion invalida");
                break;
        }
        break;
    }
    alert("¡Gracias por tu visita!");
}else{
    alert("Prohibida la venta de bebidas alcoholicas a menores de 18 años");
}


