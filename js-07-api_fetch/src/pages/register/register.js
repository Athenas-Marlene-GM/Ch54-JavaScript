import { postUser } from "../../js/api/postUser/postUser.js";
import { isUserValid } from "../../js/validations/isUserValid.js";
import { insertMainHeader as menu } from "../../modules/header/header.js";
menu( document.getElementById("header") );

import { leerInputsFormulario } from "./leerInputFormulario.js";
import { ejecutarObjetos } from "./objetos.js";
ejecutarObjetos();

const registerForm = document.getElementById("contactForm");

registerForm.addEventListener( "submit" , async ( e )=>{
    e.preventDefault(); // evita que se envíe el formulario
    console.log("Manejo del formulario");
    // console.log( e );

    // Obtener los dtos del formulario.
     const newUser = leerInputsFormulario( registerForm );
     console.log( newUser);
    
    // Obtener los dtos del formulario.
    // Validar los datos
    const validateUser = isUserValid(newUser)
    if(validateUser.isValid){
        // Si los datos son válidos enviar el formulario
        try
        {
            const response = await postUser("https://reqres.in/api/users", newUser);
            alert("Formulario enviado correctamente: ", response.createAt);

        }
        catch{
            alert("Error en el formulario");
        }
         
        // - Usando la api fetch al servidor, con el método POST enviar el formulario
    }
    else{
        alert(validateUser.errors.join("\n"));

    }
    
           // = Enviar un mensaje al usuario, limpiar el formulario, redirigir la página
           // = Enviar al usuario el error del servidor
    // Si los datos no son válidos enviar un mensaje al usuario
} );