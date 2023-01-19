

function botonalerta(){
    var comentario=document.forms["contactame"]["comentarios"].value;
    if (comentario=="") {
    alert('Debe escribir mensaje antes de enviar');
}
}