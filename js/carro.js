// FALTA DESIGNARLE VARIABLE A CARRITOESTAVACIO 
const carritoEstaVacio = (items de la lista === 0):

if (carritoEstaVacio) {
    document.getElementsByClassName('carrito__lista')
    [0].style.display = "none";
    document.getElementsByClassName('vacio')
    [0].style.display = "block"
}
if (!carritoEstaVacio) {
    document.getElementsByClassName('carrito__lista')
    [0].style.display = "block";
    document.getElementsByClassName('vacio')
    [0].style.display = "none";
}