const ejecutarObjetos = () =>{
    const myObj = {
        key : "valor",
        name : "SerchNeo",
        firstName : "Trrs",
        email: "serchneo@matrix.com",
        password: "despertar&",
        birthdate:"2025-02-25",
        isActive: true,
        hobbies:["Despertar persona", "Verdades incómodas", "Comer puré"],
        favoritos: {
            bebidas: ["agua", "pozol", "agua de tamarindo"],
            comidas: ["pozole", "tacos de suadero"]
        },
        saludar : function myFunction ( persona ){
            return `Hola ${persona}`;
        }
    };

    //Leer datos del objeto
    const nombrePersona = myObj.name; 
    const favoritos = myObj.favoritos.bebidas;
    const segundaBebida = favoritos[1];
    const terceraBebida = myObj.favoritos.bebidas[2];

    //Acceder al atributo first name = myObj.firstName;
    /*
        mas legible y corta
        Usada comunmente y preferida cuando conocer el nombre de la propiedad
    */
    const firstName = myObj.firstName;
    const primerNombre = myObj["firstName"];

    const mensaje = myObj.saludar("Abril");
    console.log(mensaje);
    //-------------------Optional Chaining -----------------------
    //Sirve para acceder a prpiedades de objeto de forma segura, evitando errores si una propiedad intermedia no existe

    const primeraComida = myObj.favoritos.alimentos; //Undefined por que no exite el atributo elementos
    const primeraComida2 = myObj?.favoritos?.alimentos; //lanza una excepción se agrega el signo de interrogación  

    //iterar un objeto
    //for in itera sobre los atributos de un objeto
    for( let clave in myObj){
        console.log(clave, myObj[clave]);

    }

}

export{ejecutarObjetos};