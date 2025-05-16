console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/


function saludar( nombre ){
  console.log("¿Qué te gustaría de regalo de cumpleaños?" + nombre);
}


/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/


const darRegalo = function(nombre, regalo){
  console.log(`Felicidaes ${nombre} te traje ${regalo}`);
};
darRegalo("Jen", "Sopa Nisin con camarón");

/*
 Realizar una función declarada que sume dos números 
 y retorne el resultado.
 
 Realizar una función expresada que reste dos números 
 y retorne el resultado.
 
*/
function add( num1, num2 ){
  return num1 + num2;
}

console.log(add(34,5));

const subs = function(num1, num2){
  return num1 - num2;
}

console.log(subs(50,4));

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

(function (){
  console.log("Configuración de la aplicación");
})();

(function (data){
  console.log("valor de data: " + data);
})(18);



/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// Realizar una función declarada que calcule al área de un triángulo
// al función debe retornar el resultado.

function triangleArea( base, height ){
  return base * height / 2;
}

console.log(triangleArea(2,8));


//funcion expresada
const triangleAreaExp = function( base, height ){
  return base * height / 2;
}
console.log(triangleAreaExp( 2, 4 ));

//funcion flecha

const triangleAreaVar = (base,height) => base * height / 2;
console.log(triangleAreaVar(2,9));


const printArea = (base, height) => console.log(triangleAreaVar(base,height));

printArea(12,20);

console.log(printArea(12,20)); //undifinesd

// Realizar una función flecha que calcule el área de un círculo

//si solo hay un argumento, se pueden quitar los paréntesis
const circleArea = radio => Math.PI * radio ** 2;

const printCircleArea = ( area ) => document.getElementById("area-circulo").innerText = area.toFixed(2); //limitar decimales


printCircleArea(circleArea( 6 ));
// Área = pi * radio^2
// Usar una función flecha para imprimir el resultado en un párrafo id="area-circulo"

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/

const saludarPersona = (nombre="persona invitada") => console.log(`Hola ${nombre}, ya nos vamos a descansar`);


saludarPersona(); //Hola undefined (di no se le da un valor por defecto), ya nos vammos a descansar

saludarPersona("Mich");


console.log(parseInt("5")); //base 10 : 0,1,2,3,4,5,6,7,8,9,
console.log(parseInt("1000")); //1000 base 10
console.log(parseInt("1000",10)); //1000 base 10
console.log(parseInt("1000",2)); // 8 base 10
console.log(parseInt("D2042D")); // NaN
console.log(parseInt("D2042D",16)); // 13763629 base 10


/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

const imprimirMensaje = ( fncCallBack ) => fncCallBack("Hola Ch54");

/*
  imprimirMensaje( "Patito" ) //fnCallBack is not a function
  imprimirMensaje(18) //fnCallBack is not a function
*/

imprimirMensaje( console.log ) //"hola CH54"
//imprimirMensaje(console.log()) //fnCallBack is not a function

//imprimirMensaje( undefined ) //fnCallBack is not a function

const enviarParrafo = (mensaje) => {
  const saluda = "Hola, buen día";
  const referencia = document.getElementById("saludo-callback");
  referencia.innerText = `${saluda} ${mensaje}`;
}

imprimirMensaje(enviarParrafo);

 // usando la función imprimirMensaje, enviar un callback para que
 // imprima con alert

 imprimirMensaje(alert);

 /*
  Realizar una función que sume dos numeros y que imprima
  el resultado.
   - inicialmente se imprimirá en la consola
   - es posible que se te pida imprimir en el dom
   - es posible que se te pida imprimir en un alert
*/

const sumarDosNumeros = (a,b) => a + b;

/*
const sumarEImprimir = ( a, b , opcion = "consola") => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
    //imprimir en consola
   if( opcion === "consola") console.log(mensaje);
   else if (opcion === "parrafo") document.getElementById("resultado-sumatoria").innerText = mensaje;
   else if (opcion === "h2")document.getElementById("resultadoH2-sumatoria").innerText = mensaje;
   else alert(mensaje)
}
sumarEImprimir(10,14);
sumarEImprimir(10,14,"parrafo");
*/
const sumarEImprimir = ( a, b , imprimir = console.log) => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
    imprimir(mensaje)
}

const imprimirDOMParagraph = ( mensaje ) => {
   const refParagraph = document.getElementById("resultado-sumatoria");
   refParagraph.innerText = mensaje;
}

const imprimirDOMh2 = ( mensaje ) => {
   const refParagraph = document.getElementById("resultadoH2-sumatoria");
   refParagraph.innerText = mensaje;
}

sumarEImprimir( 10,14,imprimirDOMParagraph);//se imprime en paragraph
sumarEImprimir( 10,14,imprimirDOMh2); // se imprime en h2
sumarEImprimir( 10,14,alert); //se imprime en un alert

// -------------- Recursividad ---------------------
/*
  Una función recursiva es una función que se llama así misma durante su ejecución.

  Se utilizan en algoritmos y soluciones que se basan en la división y conquista
  como cálculos matemáticos, recorrido de estructura de datos y algoritmos de búsqueda
  y ordenamiento.

  Patrón:
    function nombreFuncionRecursiva( parametro  ){
        if( condicionParo){
            return expresión;
        }
        else {
            // llamada recursiva
            nombreFuncionRecursiva( nuevoParametro );
        }
    }
*/

// Calcular el factorial de un número
// factorial de 5: 5 * 4 * 3 * 2 * 1;
function factorialConCicloFor( numero ) {
    let factorial = 1;
    for (let i=0; i < numero; i++) {
      factorial *= (numero - i); // factorial = factorial * (numero - i);
      console.log(`i: ${i}, factorial: ${factorial}, numero: ${numero - i}` );
    }
    return factorial;
}
console.log(`El factorial de 5 es: ${factorialConCicloFor(5)}`); // 120

// calculando el factorial con recursividad

function factorialConRecursividad( numero ){
    console.log(`Resolviendo el factorial de ${numero}`);
    if( numero <= 1  ) return 1 ;    
    const result = factorialConRecursividad( numero - 1 ) * numero ;
    console.log(`El factorial de ${numero} es ${result}`);
    return result;
}
console.log(`Resultado final: ${ factorialConRecursividad(5)}`); // 120

/*
    parámetro   recursividad(n-1)   returnFnc
    1            ----               1
    2          2-1 = 1              2
    3          3-1 = 2              6
    4          4-1 = 3              24
    5          5-1 = 4              120
*/

/*
 Generar una función recursiva que muestre en consola un saludo
 donde se indique el número saludo deseado.
  ej: saludar 10 veces
  Saludo 1
  Saludo 2
  Saludo 3
  Saludo 4
  Saludo 5
  Saludo 6
   ....
  Saludo 10
*/

function saludoRecursivo( numSaludos ){
  if( numSaludos < 1) return 0;
  console.log("Saludo " + numSaludos );
  saludoRecursivo( numSaludos - 1);
}

saludoRecursivo(5);
