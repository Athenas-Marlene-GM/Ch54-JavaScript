function saludar(){
    alert("Ya casi nos vamos al segundo descando");
}
function cambiarColorFondo(color){
    document.body.style.backgroundColor = color;
}
function changeToGreenColor(){
    const element = document.getElementById('green-paragraph');
    console.log(element);
    element.style.color="green";
}
function changeColor(element, color){
    element.style.color = color;
}
function setUp(){
    document.getElementById("title").style.color = "blue";
    document.getElementById("title").style.fontSize = "50px";
};
setUp();