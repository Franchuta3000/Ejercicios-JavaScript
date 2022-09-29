/*
Utilizando lo que has aprendido sobre funciones y parámetros, crea una función que, dado
un nombre, diga "buenos días" a esa persona por su nombre.

Crea una función que, dado un nombre, diga "buenos días" a esa persona por su nombre.

Personaliza aún más tu función incluyendo la hora del día en tu saludo.

Personaliza aún más tu código para que diga "¡Voy por ti, Dooku!" si tu función se llama con "Count Dooku".

*/


let nombre=prompt("Dime tu nombre");
var fechaHora = new Date();
var horas = fechaHora.getHours();
var minutos = fechaHora.getMinutes();
 var segundos = fechaHora.getSeconds();
function Saludo(nombre) {
    let dooku="Count Dooku";
    if (nombre==dooku) { 
        console.log("¡Voy por ti, Dooku!")     
    } 
    else {  
        console.log("Saludos!"+ nombre+ ". Hoy son las "+horas+" horas con "+minutos+" minutos");
    }   

}
Saludo(nombre);
