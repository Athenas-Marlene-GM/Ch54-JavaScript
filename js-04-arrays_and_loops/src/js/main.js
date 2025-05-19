
// =============== Declarar un arreglo ===============
const myArray = []; // []
const myArray2 = new Array(); // []

const myArray3 = [5]; // [5]
const myArray4 = new Array(5); // [undefined, undefined, undefined, undefined, undefined]

const myArray5 = [5,6]; // [5,6]
const myArray6 = new Array(5,6); // [5,6]

// ============ Iterar un  arreglo con for loop ============
/*
 Sintaxis:
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

*/
const nombres = ["Juan", "Pedro", "María", "Ana"];
for ( let index = 0; index < nombres.length; index++ ){
    console.log( nombres[index] ); // Juan, Pedro, María, Ana
}



// Simplificaciones en la iteración de un arreglo
// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/

const colores = ["Rojo", "Azul", "Verde", "Amarillo"];

for (let i = 0; i < colores.length; i++) {
    const element = colores[i];
    console.log(element);    
}

for ( const color of colores ) {
    console.log( color );
}

// ---------------------- Ejercicio con for of ---------------------
/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 */

const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
const refListaCantantes = document.getElementById("cantantes-lista");

const mostrarCantantes = (cantantes, refListaCantantes ) =>{
    let listadoCantantes = "";
    for( const cantante of cantantes){
        listadoCantantes += "<li>" + cantante + "</li>";
    }
    refListaCantantes.innerHTML = listadoCantantes;
}

mostrarCantantes(cantantes, refListaCantantes);



// Imprimir en consola cada uno de los cantantes, usandor for of
//usra arrow function

const imprimirCantantes = (cantantes) =>{
    for( const cantante of cantantes){
        console.log(cantante);
    }
}

imprimirCantantes(cantantes);


const imprimirCantantes2 = (cantantes) =>{
    let cantantesConcatenados = "";
    for( const cantante of cantantes){
        cantantesConcatenados += cantante + "-";
    }
    return cantantesConcatenados;
}

console.log(imprimirCantantes2(cantantes));


// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.

let iteracion = 0;

for ( ;   ;  ){
    console.log( `Núm de iteración: ${iteracion}` ); // 0, 1, 2, 3, 4
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
}

// ------------------- Uso de break y label en ciclos anidados ----------------------------
multiplicando:
for (let i = 1; i <= 7; i++ ){
    multiplicador:
    for (let j = 1; j <= 10 ; j++){        
        console.log(`${i} x ${j} = ${i * j}`);             
        if( i >= 4 ) break multiplicando;
    }

}


//Ejercicios mentales





// ------------------- Uso de continue en ciclos ----------------------------
// break: Termina completamente un bucle (for, while, switch, etc.).
// continue: Salta la iteración actual y pasa a la siguiente sin salir del bucle.

console.log(   NaN === NaN );  // false
for (let i = 0 ; i <= 5; i++ ){
    if ( i === 3) continue;
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
}

for (let i = 0 ; i <= 5; i++ ){
    if ( i !== 3){ 
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
    }
}



// ============== Ciclo While ======================
//                (while loop)
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla.

 Sintaxis:
    while( condición) sentencia;

    while ( condición ){
        sentencias;
    }

*/
/*
 Pregunta al usuario si quire que se genere su númer de la suerte.
 Si la respuesta es "si", genera de forma aleatoria un número.
 En cas contrario, despedirse.
*/ 

/* while(  confirm("¿Quieres tu número de la suerte")  ){

    const numeroSuerte = (Math.random() * 100).toFixed(0); //0..1.0 
    console.log("Tu número de la suerte es: " + numeroSuerte);
} */

/* 
 Uso de Math.random();
 Generar 5 números aleatorios.
 Los números deben estar entre el 0.0 y 10.0(sin incluir 10.0)
*/

const generarNumerosAleatorios = (cantidad) => {
    let numerosAleatorios = [];
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.random() * 10;
        numerosAleatorios.push(numeroAleatorio);
    }
    return numerosAleatorios;
};
generarNumerosAleatorios(5);


const generarNumerosAleatorios2 = (cantidad, minNum = 0, maxNum = 10) => {
    let numerosAleatorios = [];
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.random();
        const escalarNumero = Math.floor(numeroAleatorio * (maxNum + 1 - minNum) + minNum);
        console.log("Numero aleatorio: ", escalarNumero);
        numerosAleatorios.push(escalarNumero);
    }
    return numerosAleatorios;
};
generarNumerosAleatorios2(25,7,23);

const generarNumerosAleatorios3 = (cantidad, minNum = 0, maxNum = 10) => {
    let numerosAleatorios = [];
    for (let i = 0; i < cantidad; ) {
        const numeroAleatorio = Math.random();
        const escalarNumero = Math.floor(numeroAleatorio * (maxNum + 1 - minNum) + minNum);
        if(!numerosAleatorios.includes(escalarNumero)){
            console.log("Numero aleatorio: ", escalarNumero);
            numerosAleatorios.push(escalarNumero);
            i++
        }  
    }
    return numerosAleatorios;
};
console.log("Numeros aleatorios sin repetir");
generarNumerosAleatorios3(10,6,15);

/*
      Melate Chocolate
      1.- Al puldar el botón Generar mis número de la suerte.
      1. Generar 6 números aleatorios entre el 1 y el 54.
      2.- Mostrar el resultado en el DOM.
*/

const generarNumeroAleatorio = (minNum, maxNum) =>{
    const numeroAleatorio = Math.random();
    const escalarNumero = numeroAleatorio * (maxNum + 1 - minNum) + minNum;
    const numeroEntero = Math.floor(escalarNumero + minNum);
    return numeroEntero;
}

const imprimirMelateChocolate = (numeros) => {
    const referencia = document.getElementById("melate-chocolate");
    referencia.innerHTML = `${numeros.join(' - ')}`;
}

const elNumeroExisteEnArreglo = (arreglo, numero) =>{
    /* for( const elemento of arreglo){
        if( elemento === numero) return true
    }
    return false; */

    return arreglo.includes(numero);
}

const generarNumerosDeLaSuerte = (size = 6, minNum = 1, maxNum = 54) =>{
    const numeros =[];
    while(numeros.length < size){
        const numeroAleatorio = generarNumeroAleatorio(minNum, maxNum);
        if(elNumeroExisteEnArreglo(numeros,numeroAleatorio)) continue;
        numeros.push(numeroAleatorio);
    }
    return numeros;
}

const compararNumeros = ( a, b) => {
    if( a < b ) return -1;
    if( a > b ) return 1;
    return 0;
}

const numerosIniciales = [ 5, 33, 8, 100, 4, 2, 7, 6 ];

// ----uso del método sort ------------
const comparaNumeros = ( a, b ) => {
    if ( a < b ) return -1;
    if ( a > b ) return 1;
    return 0;
}

const comparaNumerosOrdenDescendente = ( a, b ) => {
    if ( a > b ) return -1;
    if ( a < b ) return 1;
    return 0;
}

const ordenarNumeros = ( numerosDesordenados, fncCallBack )=>{
    const numerosOrdenados = numerosDesordenados.slice();
    numerosOrdenados.sort( fncCallBack );
    return numerosOrdenados;
}
console.log( numerosIniciales );
console.log( ordenarNumeros(numerosIniciales, comparaNumeros) );
console.log( ordenarNumeros(numerosIniciales, comparaNumerosOrdenDescendente) );
console.log( ordenarNumeros(numerosIniciales, (a,b)=>a-b));
console.log( numerosIniciales );