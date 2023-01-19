var infoProductos = [
    {
        nombre: "producto 1",
        imagen: "/src",
        codigo: 1234567890,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolorem hic rem odio incidunt voluptas pariatur a repellendus? Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000
    },
    {
        nombre: "producto 2",
        imagen: "/src",
        codigo: 1234567890,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolorem hic rem odio incidunt voluptas pariatur a repellendus? Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    },
    {
        nombre: "producto 3",
        imagen: "/src",
        codigo: 1234567890,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolorem hic rem odio incidunt voluptas pariatur a repellendus? Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    },
    {
        nombre: "producto 4",
        imagen: "/src",
        codigo: 1234567890,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolorem hic rem odio incidunt voluptas pariatur a repellendus? Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    },
    {
        nombre: "producto 5",
        imagen: "/src",
        codigo: 1234567890,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolorem hic rem odio incidunt voluptas pariatur a repellendus? Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    },
    {
        nombre: "producto 6",
        imagen: "/src",
        codigo: 1234567890,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolorem hic rem odio incidunt voluptas pariatur a repellendus? Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    },
    {
        nombre: "producto 7",
        imagen: "/src",
        codigo: 1234567890,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolorem hic rem odio incidunt voluptas pariatur a repellendus? Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    },
    {
        nombre: "producto 8",
        imagen: "/src",
        codigo: 1234567890,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolorem hic rem odio incidunt voluptas pariatur a repellendus? Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    },
    {
        nombre: "producto 9",
        imagen: "/src",
        codigo: 1,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolorem hic rem odio incidunt voluptas pariatur a repellendus? Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    },
    {
        nombre: "producto 10",
        imagen: "/qweqweqew",
        codigo: 1234567,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolorem hic rem odio incidunt voluptas pariatur a repellendus? Exercitationem corrupti molestiae consequuntur hic praesentium non dignissimos repellendus maiores sed ea.",
        precio: 00000

    }

]


//Creacion elementos de las Card

var divExterno = document.createElement("div");
divExterno.className = "col-sm-4";

var divMedio = document.createElement("div");
divMedio.className = "card"

var divInterno = document.createElement("div");
divInterno.className = "card-body";

var tituloCard = document.createElement("h5");
tituloCard.className = "card-title";
tituloCard.textContent = "Titulo"

var parrafoCard = document.createElement("p");
parrafoCard.className = "card-text";
parrafoCard.textContent = "1281293817398173193287139183719238"

var botonParrafo = document.createElement("a");
botonParrafo.className = "btn btn-primary";
botonParrafo.id = "boton";
botonParrafo.text = "Agregar al carrito"
  
console.log(botonParrafo)

$("#contenedorCard").append(divExterno);
divExterno.append(divMedio);
divMedio.append(divInterno);
divInterno.append(tituloCard);
divInterno.append(parrafoCard);
divInterno.append(botonParrafo)
