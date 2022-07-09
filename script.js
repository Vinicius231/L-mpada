var img = document.querySelector('.lampada')
var body = document.querySelector('.corpo')
var titulo = document.querySelector('.titulo')
var estado = 0

function entrou(){
    if(estado==0){
        img.src='./img/ligada.png'
        body.style.background='yellow'
        titulo.style.color='black'
    }
}
function saiu(){
    if(estado==0){
        img.src='./img/apagada.png'
        body.style.background='black'
        titulo.style.color='white'
    }

}
function doisclick(){
    estado = 1
    img.src='./img/quebrada.png'
    body.style.background='black'
    titulo.style.color='white'
}