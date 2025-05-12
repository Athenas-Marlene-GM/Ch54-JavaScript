function changeName(id){
    let name = prompt("¿Cúal es tu nombre?");
    const element = document.getElementById(id).textContent = "Hola " + name;
}