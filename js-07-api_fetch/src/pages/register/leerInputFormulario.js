const leerInputsFormulario = (formulario) =>{
    const newUser = {
        name: formulario.elements["name"].value,
        lastName: formulario.elements["family-name"].value,
        email: formulario.elements["email"].value,
        password: formulario.elements["new-password"].value,
        birthday: formulario.elements["bday"].value,
        checkbox: formulario.elements["terminos-condiciones"].checked

    }
    return newUser;

};

export{ leerInputsFormulario};

