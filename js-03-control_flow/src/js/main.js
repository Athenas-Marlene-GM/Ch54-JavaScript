/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/


/* 
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18, la función debe
 retornar el mensaje "Eres mayor de edad".
 En caso contrario, retornar el mensaje "Eres menor de edad".
 - Realizar la versión de if-else sin usar el bloque de código {}
*/

const esMayorDeEdad = (edad) => { 
    if( edad >= 18 ) return "Eres mayor de edad"; 
    else  return "Eres menor de edad";
}

console.log(esMayorDeEdad(4));


/*
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18 y menor o igual a 30
                 ( evalur con 18 Y(&&) evaluar con 30        )
 la función debe retornar el mensaje "Tu luchador es Místico".
 Si es mayor o igual a 31 el mensaje "Tu luchador es el perro Aguayo".
 Si es menor a 18 el mensaje "Tu luchador es Penta"
*/

const esRango = (edad) => {
    if( edad >= 18  && edad <=30 ) return "Tu luchador es Místico";
    else if( edad >= 31) return "Tu luchador es el perro Aguayo";
    else return "Tu luchador es Penta";
}

{
    let myVarLet = 30;
    const myVarConst = 40;
    var myVarVar = 50;
    console.log(myVarLet, myVarConst, myVarVar)
    {
        let myVarLet = 100;
        const myVarConst = 110;
        var myVarVar = 120;
        console.log(myVarLet, myVarConst, myVarVar)
    }
    console.log(myVarLet, myVarConst, myVarVar)
}

//Ejercicios mentales
let active = false;
if (active === true);{
    console.log("Está activo");
}
console.log("Fin del programa");

if( active === true )
    console.log("Esta activo");
    console.log("Tiene autorización");

console.log("Fin del programa");

/* active = false;
if(active); console.log("Está activo");
else console.log("No está activo");
console.log("Fin del programa"); */




//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/
const evaluarNombre = ( nombre ) => {
    let resultado;
    switch ( nombre){
        case "Lua":
            resultado = "Es de Abril";
            break;
        default:
            resultado ="No se sabe de quién es";
        
    }
    return resultado;
}
console.log( evaluarNombre("Lua") ); // Es de Abril

const evaluarNombre2 = ( nombre ) => {
    let resultado;
    switch ( nombre){
        case "Lua":
            resultado = "Es de Abril";
            break;
        case "Borrego": 
        case "Besito":
        case "Fijól":
        case "Paco":
            resultado = "Es de Yessica";
            break;
        case "Milo":
            resultado = "Es de Carlos";
            break
        case "Cuchara":
            resultado = "Es de Ricardo";
            break;
        default:
            resultado ="No se sabe de quién es";        
    }
    return resultado;
}
console.log( evaluarNombre2("Lua") ); // Es de Abril
console.log( evaluarNombre2("Milo") ); // Es de Carlos
console.log( evaluarNombre2("Borrego") ); // Es de Jessica

/**
 * Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje
 */

const estadoVentilador = ( velocidad ) => {
    let mensaje;
    switch ( velocidad ){
        case "Velocidad 0":
            mensaje = "Apagado";
            break;
        case "Velocidad 1":
            mensaje = "Baja";
            break;
        case "Velocidad 2":
            mensaje = "Media";
            break;
        case "Velocidad 3":
            mensaje = "Alta";
            break;
        default:
            mensaje = "Velocidad desconocida";
            break;
    }  
    return mensaje;  
}

console.log(estadoVentilador("Velocidad 0"));


const estadoVentilador2 = ( velocidad ) => {
    if( velocidad === "Velocidad 0" ) return "Apagado";
    else if( velocidad === "Velocidad 1" ) return "Baja";
    else if( velocidad === "Velocidad 2" ) return "Media";
    else if( velocidad === "Velocidad 3" ) return "Alta";
    else return "Velocidad desconocida";
}


console.log(estadoVentilador2("Velocidad 1"));



const estadoVentilador3 = ( velocidad ) => {
    let mensaje;
    switch ( velocidad ){
        case 0:
        case "0":
        case "Velocidad 0":
            mensaje = "Apagado";
            break;
        case 1:
        case "1":
        case "Velocidad 1":
            mensaje = "Baja";
            break;
        case 2:
        case "2":
        case "Velocidad 2":
            mensaje = "Media";
            break;
        case 3:
        case "3":
        case "Velocidad 3":
            mensaje = "Alta";
            break;
        default:
            mensaje = "Velocidad desconocida";
            break;
    }  
    return mensaje;  
}

console.log(estadoVentilador3("3"));


const estadoVentilador4 = ( velocidad ) => {
    if( velocidad === "Velocidad 0"  || velocidad == 0) return "Apagado";
    else if( velocidad === "Velocidad 1" || velocidad == 1) return "Baja";
    else if( velocidad === "Velocidad 2" || velocidad == 2) return "Media";
    else if( velocidad === "Velocidad 3" || velocidad == 3) return "Alta";
    else return "Velocidad desconocida";
}


console.log(estadoVentilador4("2"));

// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/
const verficarPagoDeTarjeta = ( estaPagado ) =>{
    let msj;
    if( estaPagado) {
        msj = "La tarjta ha sido pagada";
    } else {
        msj = "La tarjeta no ha sido pagada";
    }
    return msj;
}
console.log( verficarPagoDeTarjeta( true ) ); // La tarjeta ha sido pagada
console.log( verficarPagoDeTarjeta( false ) );// la tarjeta no ha sido pagada


const verficarPagoDeTarjetaTernario = ( estaPagado ) =>{
    return estaPagado ? "esta pagado":"no está pagado";
}
console.log( verficarPagoDeTarjetaTernario ( true ) ); // La tarjeta ha sido pagada
console.log( verficarPagoDeTarjetaTernario ( false ) );// la tarjeta no ha sido pagada


/*
 Dado un número entero, imprimir:
 "Negativo":  si el número es menor a 0.
 "Cero":  si el número es  0.
 "Positivo":  si el número es mayor a cero pero menor a 100.
 "Grande": si el número es mayor o igual a 100.
 - Realizar una función que reciba el número y retorne el mensaje.
 - El retorno debe ser impreso en la consola.
 - Realizar una versión if-else, switch y operador ternario.
*/

const tipoNumero = (numero) =>{
    let msj;
    if(numero < 0) msj = "Negativo";
    else if(numero === 0) msj = "Cero";
    else if (numero > 0 && numero < 100)msj= "Positivo";
    else msj = "Grande";
    return msj;
}

// ----- Function Switch ----------
function evaluarElNumeroSwitch(numero) {

    switch ( true ) {
        case (numero < 0):
            mensaje = "Negativo";
            break;
        case (numero === 0):
            mensaje = "Cero";
            break;
        case (numero >0 && numero < 100):
            mensaje = "Positivo";
            break;
        case (numero >= 100):
            mensaje = "Grande";
            break;
        default:
            mensaje = "Numero desconocido";
    }
    return mensaje;
};

console.log(evaluarElNumeroSwitch(-45) ); // Negativo
console.log(evaluarElNumeroSwitch(0) ); // Cero
console.log(evaluarElNumeroSwitch(45) ); // Positivo
console.log(evaluarElNumeroSwitch(100) ); // Grande

const tipoNumero2 = (numero) =>{
   return numero < 0 ? "Negativo": numero === 0 ? "Cero" : numero > 0 && numero < 100 ? "Positivo": "Grande";
}

console.log(tipoNumero2(345));

/**
 *  Función que reciba la edad de una persona y devuelva el mensaje:
 *  Si la edad es mayor o igual a 18 años: Eres mayor de edad
 *  En caso contraio: Eres menor de edad
 *  @param {number} edad
 *  @returns {string} mensaje
 */


const esMayorDeEdad2 = (edad) => edad >= 18 ?  "Eres mayor de edad" : "Eres menor de edad"; 
    

// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/


