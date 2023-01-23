// FALTA DESIGNARLE VARIABLE A CARRITOESTAVACIO 
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