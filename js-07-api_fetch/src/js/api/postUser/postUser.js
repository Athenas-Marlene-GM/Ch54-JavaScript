const postUser = async ( url,user ) => {
    // Para el método POST, PUT y DELETE se debe configurar
    // el objeto de configuración del meétodo fetch.
    console.log(user);
    const options = {
        method: "POST", // Método HTTP: POST, PUT, DELETE, GET
        headers: {
            "x-api-key": "reqres-free-v1",
            "Content-Type": "application/json" // Tipo de contenido
        },
        body: JSON.stringify(user) // Cuerpo de la petición
    }
    const response = await fetch( url, options);
    console.log( "Respuesta del servidor:", response );
    if ( !response.ok || response.status !== 201 ) {
        // Si la respuesta no es correcta, lanzar un error
        throw new Error(`Error al enviar el usuario: ${response.statusText}`);
    }
    // Solo es necesario si el servidor devuelve un cuerpo en la respuesta
    // en formato JSON.
    const data = await response.json(); 
    return data;
}
export { postUser };