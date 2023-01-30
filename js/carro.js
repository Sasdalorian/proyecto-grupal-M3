

var arregloCarro = []

var idProducto, nombreCarro, cantidadCarro, precioCarro, idNombreCarro, imagenCarro, eliminarCarro, thEliminarCarro, totalProductoCarro, totalCarro;
var totalBruto, iva, totalNeto, despacho;

if (arregloCarro.length == 0) {
  $("#headTablaCarro").hide();
  $("#footerTabla").hide();
  $("#botonesCarro").hide();
  $("#caraTriste").show();
} else {
  $("#headTablaCarro").show();
  $("#footerTabla").show();
  $("#botonesCarro").show();
  $("#caraTriste").hide();
}

function total() {
  $(".totalBruto").remove();
  $(".totalIVA").remove();
  $(".valorDespacho").remove();
  $(".totalneto").remove();


  sumaBruto = 0;
  iva = 0;
  arregloCarro.forEach(element => {
    sumaBruto += parseInt(element.precio.replace(/[^0-9]+/g, "")) * parseInt(element.cantidad)
  });

  iva = (sumaBruto / 1.19) * 0.19;

  //Si el total es menor a 100 mil no hace descuento, respetando el requerimiento 
  if (sumaBruto >= 100000) {
    despacho = sumaBruto * 0.05
  } else {
    despacho = 0
  }

  totalNeto = Math.round((sumaBruto / 1.19) + despacho);

  totalBruto = document.createElement("div");
  totalBruto.className = "totalBruto";
  totalBruto.textContent = new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(sumaBruto);
  totalBruto.style = "justify-content: left; display: flex; padding-left: 5%;";

  var totalneto = document.createElement("div");
  totalneto.className = "totalneto";
  totalneto.textContent = new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(totalNeto);
  totalneto.style = "justify-content: left; display: flex; padding-left: 5%;";

  var valorDespacho = document.createElement("div");
  valorDespacho.className = "valorDespacho";
  valorDespacho.textContent = new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(despacho);
  valorDespacho.style = "justify-content: left; display: flex; padding-left: 5%;";

  var totalIVA = document.createElement("div");
  totalIVA.className = "totalIVA";
  totalIVA.textContent = new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(iva);
  totalIVA.style = "justify-content: left; display: flex; padding-left: 5%;";

  $("#neto").append(totalneto)
  $("#iva").append(totalIVA)
  $("#despacho").append(valorDespacho)
  $("#total").append(totalBruto)
}


$(".btnAgregar").on("click", function () {
  $(".contenedorProducto").remove();
  $(".totalBruto").remove();
  $(".totalIVA").remove();
  $(".totalneto").remove();
  $("#headTablaCarro").show();
  $("#footerTabla").show();
  $("#caraTriste").hide();
  $("#botonesCarro").show();

  var objetoCarro = {
    nombre: undefined,
    imagen: undefined,
    codigo: undefined,
    descripcion: undefined,
    precio: undefined,
    cantidad: 1,
    totalProducto: 0
  }
  var indice = 0;

  idProducto = this.getAttribute("id")[this.getAttribute("id").length - 1];

  var idNombreCarro = "nombreProducto-" + idProducto;
  var idCantidad = "cantidad-" + idProducto;
  var idImagenCarro = "img-" + idProducto;
  var idPrecioCarro = "precio-" + idProducto;
  var idCodigoCarro = "codigo-" + idProducto;
  var idDescripcion = "descripcion-" + idProducto;

  objetoCarro.nombre = document.getElementById(idNombreCarro).innerText;
  objetoCarro.imagen = document.getElementById(idImagenCarro).src;
  objetoCarro.codigo = document.getElementById(idCodigoCarro).innerText;
  objetoCarro.descripcion = document.getElementById(idDescripcion).innerText;
  objetoCarro.precio = document.getElementById(idPrecioCarro).innerText;
  objetoCarro.cantidad = document.getElementById(idCantidad).value;

  if (arregloCarro.find(element => element.nombre == objetoCarro.nombre)) {
    var indiceEnCarro = arregloCarro.findIndex(element => element.nombre == objetoCarro.nombre);
    var cantidadAñadida = document.getElementById(idCantidad).value;
    var montoProductos = parseInt(cantidadAñadida) + parseInt(arregloCarro[indiceEnCarro].cantidad);


    arregloCarro[indiceEnCarro].precio = new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(parseInt(objetoCarro.precio.replace(/[^0-9]+/g, "")))
    console.log(arregloCarro[indiceEnCarro].precio)


    arregloCarro[indiceEnCarro].cantidad = montoProductos;
    arregloCarro[indiceEnCarro].totalProducto = parseInt(arregloCarro[indiceEnCarro].precio.replace(/[^0-9]+/g, "")) * arregloCarro[indiceEnCarro].cantidad;

    alert("Cantidad Modificada")
    $(".vacio").hide()
  } else {
    alert("Producto añadido");
    objetoCarro.totalProducto = parseInt(objetoCarro.precio.replace(/[^0-9]+/g, "")) * parseInt(objetoCarro.cantidad)

    arregloCarro.push(objetoCarro);
    $(".vacio").hide()
  }

  arregloCarro.forEach(element => {
    var contenedorProductosCarro = document.createElement("tr");
    contenedorProductosCarro.className = "contenedorProducto";
    contenedorProductosCarro.id = "contenedorProducto-" + indice

    imagenCarro = document.createElement("img");
    imagenCarro.src = element.imagen;
    imagenCarro.style = "width: 100px; height: 100px; margin-bottom: 10px;"

    nombreCarro = document.createElement("th");
    nombreCarro.textContent = element.nombre;
    nombreCarro.id = "nombre-" + indice;

    cantidadCarro = document.createElement("th");
    cantidadCarro.id = "cantidadCarro-" + indice
    cantidadCarro.textContent = element.cantidad;

    precioCarro = document.createElement("th");
    precioCarro = element.precio;

    totalProductoCarro = document.createElement("th");
    totalProductoCarro.textContent = new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(element.totalProducto)

    thEliminarCarro = document.createElement("th");

    eliminarCarro = document.createElement("img");
    eliminarCarro.src = "/img/icono-eliminar.png";
    eliminarCarro.style = "height: 20px; width: 25px; filter: brightness(1.1); mix-blen-mode: multiply; transition:all .5s ease-in-out;";
    eliminarCarro.id = "iconoEliminar-" + indice;
    eliminarCarro.className = "iconoEliminar";

    $("#cuerpoCarro").append(contenedorProductosCarro);
    contenedorProductosCarro.append(imagenCarro);
    contenedorProductosCarro.append(nombreCarro);
    contenedorProductosCarro.append(precioCarro);
    contenedorProductosCarro.append(cantidadCarro);
    contenedorProductosCarro.append(totalProductoCarro)
    contenedorProductosCarro.append(thEliminarCarro);
    thEliminarCarro.append(eliminarCarro);

    total()
    indice++;
  });

  document.querySelectorAll(".iconoEliminar").forEach(el => {
    el.addEventListener("click", e => {
      idEliminar = e.target.getAttribute("id")[e.target.getAttribute("id").length - 1];

      idContenedorProducto = "#contenedorProducto-" + idEliminar;

      idNombreProducto = "#nombre-" + idEliminar;

      for (let i = 0; i < arregloCarro.length; i++) {
        let elemento = arregloCarro[i];
        if ($(idNombreProducto).text() == elemento.nombre) {
          arregloCarro.splice(i, 1);
        }
      }

      $(idContenedorProducto).remove();

      console.log(arregloCarro)

      if (arregloCarro.length == 0) {
        $(".contenedorProducto").remove();
        $(".totalBruto").remove();
        $("#headTablaCarro").hide();
        $(".vacio").show();
        $("#footerTabla").hide()
        
        $(".totalIVA").remove();
        $("#botonesCarro").hide();
        $("#footerTabla").hide();
        $("#caraTriste").show();
      }

      total()
    });
  });
})

$("#agregarAlCarroModal").on("click", function () {
  $(".contenedorProducto").remove();
  $(".totalBruto").remove();
  $(".totalIVA").remove();
  $(".totalneto").remove();
  $("#headTablaCarro").show();
  $("#footerTabla").show();
  $("#caraTriste").hide();
  $("#botonesCarro").show();

  var objetoCarro = {
    nombre: undefined,
    imagen: undefined,
    codigo: undefined,
    descripcion: undefined,
    precio: undefined,
    cantidad: 1,
    totalProducto: 0
  }
  var indice = 0;
  var nombreCarro, cantidadCarro, precioCarro, imagenCarro, thEliminarCarro;

  idProducto = this.getAttribute("id")[this.getAttribute("id").length - 1];

  objetoCarro.nombre = document.getElementById("tituloModal").innerText;
  objetoCarro.imagen = document.getElementById("imagenModal").src;
  objetoCarro.codigo = document.getElementById("codigoModal").innerText;
  objetoCarro.descripcion = document.getElementById("descripcionModal").innerText;
  objetoCarro.precio = document.getElementById("precioModal").innerText;
  objetoCarro.cantidad = document.getElementById("cantidadModal").value;

  if (arregloCarro.find(element => element.nombre == objetoCarro.nombre)) {
    var indiceEnCarro = arregloCarro.findIndex(element => element.nombre == objetoCarro.nombre);
    var cantidadAñadida = document.getElementById("cantidadModal").value;
    var montoProductos = parseInt(cantidadAñadida) + parseInt(arregloCarro[indiceEnCarro].cantidad);

    arregloCarro[indiceEnCarro].precio = new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(parseInt(objetoCarro.precio.replace(/[^0-9]+/g, "")))

    arregloCarro[indiceEnCarro].cantidad = montoProductos;
    arregloCarro[indiceEnCarro].totalProducto = parseInt(arregloCarro[indiceEnCarro].precio.replace(/[^0-9]+/g, "")) * montoProductos;

    alert("Cantidad Modificada")
    $(".vacio").hide();
  } else {
    alert("Producto añadido");
    objetoCarro.totalProducto = parseInt(objetoCarro.precio.replace(/[^0-9]+/g, "")) * parseInt(objetoCarro.cantidad.replace(/[^0-9]+/g, ""))
    arregloCarro.push(objetoCarro);
    $(".vacio").hide();
  }

  arregloCarro.forEach(element => {
    var contenedorProductosCarro = document.createElement("tr");
    contenedorProductosCarro.className = "contenedorProducto";
    contenedorProductosCarro.id = "contenedorProducto-" + indice

    imagenCarro = document.createElement("img");
    imagenCarro.src = element.imagen;
    imagenCarro.style = "width: 100px; height: 100px; object-fit: fit";

    nombreCarro = document.createElement("th");
    nombreCarro.textContent = element.nombre
    nombreCarro.id = "nombre-" + indice

    cantidadCarro = document.createElement("th");
    cantidadCarro.id = "cantidadCarro-" + indice
    cantidadCarro.textContent = element.cantidad;

    precioCarro = document.createElement("th");
    precioCarro = element.precio;

    totalProductoCarro = document.createElement("th");
    totalProductoCarro.textContent = new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(element.totalProducto)

    thEliminarCarro = document.createElement("th");

    eliminarCarro = document.createElement("img");
    eliminarCarro.src = "/img/icono-eliminar.png";
    eliminarCarro.style = "height: 20px; width: 25px; filter: brightness(1.1); mix-blen-mode: multiply";
    eliminarCarro.id = "iconoEliminar-" + indice;
    eliminarCarro.className = "iconoEliminar";

    $("#cuerpoCarro").append(contenedorProductosCarro);
    contenedorProductosCarro.append(imagenCarro);
    contenedorProductosCarro.append(nombreCarro);
    contenedorProductosCarro.append(precioCarro);
    contenedorProductosCarro.append(cantidadCarro);
    contenedorProductosCarro.append(totalProductoCarro)
    contenedorProductosCarro.append(thEliminarCarro);

    thEliminarCarro.append(eliminarCarro);
    indice++;
    total()
  });

  document.querySelectorAll(".iconoEliminar").forEach(el => {
    el.addEventListener("click", e => {
      idEliminar = e.target.getAttribute("id")[e.target.getAttribute("id").length - 1];

      idContenedorProducto = "#contenedorProducto-" + idEliminar;

      idNombreProducto = "#nombre-" + idEliminar;

      for (let i = 0; i < arregloCarro.length; i++) {
        let elemento = arregloCarro[i];
        if ($(idNombreProducto).text() == elemento.nombre) {
          arregloCarro.splice(i, 1);
        }
      }

      $(idContenedorProducto).remove();

      if (arregloCarro.length == 0) {
        $(".contenedorProducto").remove();
        $(".totalBruto").remove();
        $("#headTablaCarro").hide();
        $(".vacio").show();
        $("#footerTabla").hide()
        $(".totalIVA").remove();
        $("#botonesCarro").hide();
        $("#footerTabla").hide();
        $("#caraTriste").show();
      }



      total()
    });
  });

})


$("#botonVaciarCarro").on("click", function () {
  arregloCarro = [];
  $(".contenedorProducto").remove();
  $(".totalBruto").remove();
  $("#headTablaCarro").hide();
  $(".vacio").show();
  $("#footerTabla").hide()
  $(".totalIVA").remove();
  $("#botonesCarro").hide();
  $("#footerTabla").hide();
  $("#caraTriste").show();
})


function enviarEmail() {
    
  var params =  {
                  to_name: $("#to_name").val(),
                  iva: iva,
                  neto: totalNeto,
                  carro: arregloCarro,
                  despacho: despacho,
                  total: sumaBruto,
                  emailUsuario: $("#emailUsuario").val(),
                  direccion: $("#direccionContacto").val(),
                  comuna: $("#comuna-contacto").val(),
                  region: $("#region-contacto").val(),
                }
  const serviceID = 'service_yakjw2q';
  const templateID = 'template_fve0hjq';

  emailjs.send(serviceID, templateID, params).then(
    res => {
      $("#to_name").val() = "";
      $("#emailUsuario").val() = "";
      $("#direccionContacto").val() = "";
      $("#comuna-contacto").val() = "";
      $("#region-contacto").val() = "";
      arregloCarro = []
      console.log(res)
      alert("Mensaje enviado correctamente")
    }
  )
  .catch((err => console.log(err)))
};

var objetoCarro = {
  nombre: undefined,
  imagen: undefined,
  codigo: undefined,
  descripcion: undefined,
  precio: undefined,
  cantidad: 1,
  totalProducto: 0
}

function enviarEmail() {
  var ind = 1;
  arregloCarro.forEach(element => {
    document.getElementById("contenidoCarro").innerHTML += "Producto "+ ind +": " + element.nombre +
                                                            "\n" + element.codigo +
                                                            "\nPrecio unitario: " + element.precio +
                                                            "\nCantidad: " + element.cantidad +
                                                            "\nTotal Producto: " + new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(element.totalProducto) + "\n----------------------------------------\n";

    ind++
  });
  var params = {
    to_name: document.getElementById("to_name").value,
    email: document.getElementById("emailUsuario").value,
    message:  "PRODUCTOS: \n" + document.getElementById("contenidoCarro").innerHTML +
              "\n================================\nNeto: " + new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(Math.floor(totalNeto)) + 
              "\nIVA: " + new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(Math.floor(iva)) + 
              "\nDESPACHO: " + new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(Math.floor(despacho))  + 
              "\nTOTAL: " + new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(Math.floor(sumaBruto))  + 
              "\n================================\nDIRECCIÓN: " + document.getElementById("direccionContacto").value +
              "\nCOMUNA: " + document.getElementById("comuna-contacto").value + 
              "\nREGIÓN: " + document.getElementById("region-contacto").value
  };

  const serviceID = "service_yakjw2q";
  const templateID = "template_ri9hpbt";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
      alert("Correo enviado")
        console.log(res);
       

    })
    .catch(err=>console.log(err));

}
