var infoProductos = [
    {
        nombre: "producto 1",
        imagen: "/src",
        codigo: 1234567890,
        descripcion: "Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000
    },
    {
        nombre: "producto 2",
        imagen: "/src",
        codigo: 1234567890,
        descripcion: " Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    },
    {
        nombre: "producto 3",
        imagen: "/src",
        codigo: 1234567890,
        descripcion: "Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    },
    {
        nombre: "producto 4",
        imagen: "/src",
        codigo: 1234567890,
        descripcion: "Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    },
    {
        nombre: "producto 5",
        imagen: "/src",
        codigo: 1234567890,
        descripcion: "Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    },
    {
        nombre: "producto 6",
        imagen: "/src",
        codigo: 1234567890,
        descripcion: "Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    },
    {
        nombre: "producto 7",
        imagen: "/src",
        codigo: 1234567890,
        descripcion: "Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    },
    {
        nombre: "producto 8",
        imagen: "/src",
        codigo: 1234567890,
        descripcion: "Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    },
    {
        nombre: "producto 9",
        imagen: "/src",
        codigo: 1,
        descripcion: "Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    },
    {
        nombre: "producto 10",
        imagen: "/qweqweqew",
        codigo: 1234567,
        descripcion: "Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    }

]

var divExterno;
var divMedio;
var divInterno;
var footerCard;
var tituloCard;
var descripcionCard;
var labelcheck;
var checkbox;
var imgCard;
var selecCantidad;
var labelCantidad;
var i = 0;

//iterador creador de cards
infoProductos.forEach(element => {
  
    //Creación de elementos html y asignación de atributos
    divMedio = document.createElement("div");
    divMedio.className = "card col-4 gy-3";
    divMedio.style = "object-fit: fit; border: none; max-width: 250px; min-width: 200px "

    divInterno = document.createElement("div");
    divInterno.className = "card-body card-img-overlay ";

    imgCard = document.createElement("img");
    imgCard.className = "img-fluid card-img-top rounded-top"
    imgCard.src = "/img/imgcard.jpg";
    imgCard.alt  = "Imagen no Disponible"
    imgCard.style = "max-height: 300px; object-fit: fit"

    tituloCard = document.createElement("h5");
    tituloCard.className = "card-title";
    tituloCard.textContent = "Titulo"

    descripcionCard = document.createElement("p");
    descripcionCard.className = "card-text";
    descripcionCard.textContent = element.descripcion;

    footerCard = document.createElement("div");
    footerCard.className = "card rounded-bottom pb-3";
    
    divAgregar = document.createElement("div");
    divAgregar.style = "display: flex; justify-content: space-evenly";
    divAgregar.className = "p-2"

    divCantidad = document.createElement("div");
    divCantidad.style = "display: flex; justify-content: space-evenly";

    checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox-" + i;

    labelcheck = document.createElement("label");
    labelcheck.for = "checkbox-" + i;
    labelcheck.textContent = "Añadir al Carro";

    selecCantidad = document.createElement("input");
    selecCantidad.id = "cantidad"
    selecCantidad.type = "number";
    selecCantidad.min = 1;
    selecCantidad.max = 15;
    selecCantidad.value = 1

    labelCantidad = document.createElement("label");
    labelCantidad.for = "cantidad-" + i;
    labelCantidad.textContent = "Cantidad";

    //Anidar y agregar los elementos al DOM
    $("#contenedorCard").append(divMedio);
    divMedio.append(divInterno);
    divMedio.append(imgCard)
    divMedio.append(footerCard)
    divInterno.append(tituloCard);
    divInterno.append(descripcionCard);
    divAgregar.append(labelcheck)
    divAgregar.append(checkbox)
    divCantidad.append(labelCantidad);
    divCantidad.append(selecCantidad);
    footerCard.append(divCantidad);
    footerCard.append(divAgregar);
    i++;
});
