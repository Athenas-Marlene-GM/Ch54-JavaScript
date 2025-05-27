/*
 API: Application Programming Interface
   Permite la comunicación entre dos aplicaciones de software
   a travéz de un conjunto de reglas.
 La API Fetch nos ayuda a acceder y manipular 
 peticiones HTTP (DELETE, GET, POST, PUT).
 
 Sintaxis:
    fetch(resource, options)
 Las promesa es un patrón asincrónico que se utiliza
 para manejer operaciones asíncronas.
 Las promesas permite realizar tareas asíncronas y
 manejar los resultados (éxito o error) en un momento posterior.
 Las promesas tiene 3 estados:
 1.- Pending: El estado inicial de una promesa antes de que se resuelva o rechace
 2.- Resolved: La promesa se resuelve con un valor
 3.- Rejected: La promesa se rechaza con un razón
*/

const vueltasAleatorias = (min=1, max=10)=> Math.floor(Math.random()*( max - min + 1)) + min;

const irPorElElote = ( horaDelDia ) =>{
   // const miPromesa = new Promise( fncCallBack  );
   const miPromesa = new Promise( ( fncCallBackResolve, fncCallBackReject )=>{
       console.log("Voy por el elote en la " + horaDelDia); //Esta tarea puede demorar mucho o poco;
       if( horaDelDia === "día" || horaDelDia === "tarde" ){
          fncCallBackResolve({mensaje:"Toma tu elote que está dentro de una bolsa", vueltas: vueltasAleatorias()}); 
       } else {
          fncCallBackReject( {error: 404, descripcion: "Elote no fue encontrado"}  );
       }  
   } );
   return miPromesa; 
   
}

/**
 *  Realizar un función de tipo Promise que reciba lo siguiente
 *  @param{number} el número de vueltas de amarre de la bolsa
 * 
 *  - La promesa se resuelve si el núm de vueltas es menor o igual a 2
 *    se resuelve con el texto "ñomi ñomi, me como mi elote"
 *  - Si num. de vueltas es mayor a 2, la promesa se rechaza
 *    con el texto "ups, se me cayó tu elote"
 *  
 */

const abrirBolsa = ( numeroDeVueltasDeAmarre ) => {
    const miPromesa = new Promise( ( fncCallBackResolve, fncCallBackReject ) =>
    {
        if( numeroDeVueltasDeAmarre <= 2 ){
            fncCallBackResolve("ñomi ñomi, me como mi elote");
        }
        else{
            fncCallBackReject("ups, se me cayó tu elote");
        }

    });
    return miPromesa;
}


const ponerChilito = ( ) => {
    const miPromesa = new Promise( ( fncCallBackResolve ) =>
    {
        fncCallBackResolve("chilito del que pica");

    });
    return miPromesa;
}

const ponerChilito2 = Promise.resolve("chilito del que pica");
/* 
 La función se llama ponerChilito()
 La función NO tiene parámetro de entrada.
 Realizar una promesa que retorne en el estado resolve: "Chilito del que pica".
 La función no debe tener Reject.
*/

//miFuncionPromesa().then( callback ).catch( callback );

/* irPorElElote("día").then( ( response )=> console.log("Resuelto", response));

irPorElElote("tarde")
    .then( ( response )=> console.log("1eraPromesa", response) );

irPorElElote("noche")
    .then( ( response )=> console.log("2aPromesa", response))
    .catch( (error) => console.log("Promesa rechazada", error))
    .finally(() => console.log("Se ha terminado su promesa"));

 */

/* irPorElElote("tarde")
    .then( ( response )=> {
        ponerChilito()
        .then((response) => console.log("Se le ha puesto al elote ", response));
        console.log("3aPromesa", response);
        const vueltas = 2;
        abrirBolsa(response.vueltas)
        .then(( response ) => console.log(response))
        .catch(( error ) => console.log(error));
    })
    .catch( (error) => console.log("Promesa rechazada", error))
    .finally(() => console.log("Se ha terminado su promesa"));
     */


//Ya tengo mi elote pero falta abrir la bolsa

/* 
    abrirBolsa(2)
    .then(( response ) => console.log(response))
    .catch(( error ) => console.log(error)); 
*/



/* const tiempo = "tarde"; 
irPorElElote( tiempo )
    .then( ( response )=> {
        console.log("Promesa", tiempo, response);   
        return abrirBolsa(response.vueltas);
    })
    .then( (response)=>{
        console.log( "Promesa n.Vueltas", response )
        return ponerChilito();
    })
    .then((response) => console.log(response)) 
    .catch( ( error )=> console.log(`Promesa rechazada`, error) )
    .finally( ()=> console.log("Se ha terminado tu promesa")  ); 
    */

    // ================= uso de async y await ==================

    const crisQuiereElote = async() => {

        try{
            const tiempo = "tarde";
            const response = await irPorElElote( tiempo );
            console.log(response);
            const respuestaBolsa = await abrirBolsa(response.vueltas);
            console.log(respuestaBolsa);
            const mensajeFinal = await ponerChilito();
            console.log(mensajeFinal);

        }catch(error){
            console.log(error);
        }
    }
    crisQuiereElote();

    //==================== uso de la api fetch ==========================
    const leerProductos = async(url) =>{

        try {
            const response = await fetch(url);
            console.log(response);
            const datosApi = await response.json(); // Convertir de JSON a objetos de js
            console.log(datosApi);
            return datosApi;
            //console.log(JSON.stringify(response));
            
        } catch (error) {
            console.log("No se pueden obtener los datos", error);            
        } 
    }

    const myArray = ["a","b","c"];
    let newArray = myArray.map((value,index,array) => '<p>${value}</p>');
    console.log(newArray);

    //leerProductos("https://rickandmortyapi.com/api/character"); 

    const contruirTarjetasDeRickandMorty = ( personajes ) => {
    const tarjetas = personajes.map( (personaje, index, array)=>(
     `<div class="col-12 col-md-4 col-lg-3">
        <div class="card mt-3">
            <img src="${personaje.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" class="btn btn-primary">${personaje.species}</a>
            </div>
        </div> 
      </div>
     `
    ) );
    return tarjetas;
}

const insertarTarjetasAlDom = (tarjetas, idDOM = "cards")=>{
    const refDom =  document.getElementById( idDOM );
    refDom.innerHTML = tarjetas.join("");
}

const crearCardsDeRickAndMorty = async (paginas)=>{
    let varData = await leerProductos("/public/json/rick.json");
    let tarjetasFinales = [];
    for(let i = 1; i <= paginas; i++){
        if(i > 1) {
            varData = await leerProductos(varData.info.next);
        }
        console.log(varData);
        const personajesI = varData.results;
        const tarjetasI = contruirTarjetasDeRickandMorty(personajesI);
        tarjetasFinales = tarjetasFinales.concat(tarjetasI);
    }
    
    insertarTarjetasAlDom(tarjetasFinales);
}


 


crearCardsDeRickAndMorty(3);
 

