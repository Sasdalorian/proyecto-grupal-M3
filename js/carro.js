
const cardList = document.getElementsByClassName('card-text');  // <--- HAY QUE DESIGNAR CLASE
const carritoEstaVacio = (cardList === 0);

if (carritoEstaVacio) {
    document.getElementsByClassName('u-full-width')
    [0].style.display = "none";
    document.getElementsByClassName('vacio')
    [0].style.display = "block"
} else {
    document.getElementsByClassName('u-full-width')
    [0].style.display = "block";
    document.getElementsByClassName('vacio')
    [0].style.display = "none";
}