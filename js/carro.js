var arregloCarro = [];

if(arregloCarro.length == 0){
  $("#headTablaCarro").hide();
}else{
  $("#headTablaCarro").show();
}
var idProducto,nombreCarro,cantidadCarro,precioCarro,idNombreCarro,imagenCarro,eliminarCarro,thEliminarCarro,totalProductoCarro,totalCarro;

function total(){
  $(".totalBruto").remove();
  $(".totalIVA").remove();
  
  var totalBruto,iva,totalNeto,despacho,descuento;
  sumaBruto = 0;
  iva = 0;
  arregloCarro.forEach(element => {
    sumaBruto += parseInt(element.precio.replace(/[^0-9]+/g, "")) * parseInt(element.cantidad)
  });
  despacho = sumaBruto * 0.05
  
  iva = (sumaBruto / 1.19) * 0.19;
  totalNeto = sumaBruto / 1.19;

  if (sumaBruto >= 100000) {
    descuento = despacho
  }else{
    descuento = 0
  }

  totalBruto = document.createElement("td");
  totalBruto.setAttribute("colspan","2");
  totalBruto.className = "totalBruto";
  totalBruto.textContent = "TOTAL BRUTO: " + new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(sumaBruto);

  var totalIVA= document.createElement("td");
  totalIVA.setAttribute("colspan","2");
  totalIVA.className = "totalIVA";
  totalIVA.textContent = "IVA: " + new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(iva);

  $("#footerTabla").append(totalIVA)
  $("#footerTabla").append(totalBruto)
}

$(".btnAgregar").on("click",function(){
  $(".contenedorProducto").remove();
  $(".totalBruto").remove();
  $("#headTablaCarro").show();
  $("#footerTabla").show();
  
  var objetoCarro = { nombre: undefined,
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
  
  if(arregloCarro.find(element => element.nombre == objetoCarro.nombre)){
    var indiceEnCarro = arregloCarro.findIndex(element => element.nombre == objetoCarro.nombre);
      var cantidadAñadida = document.getElementById(idCantidad).value;
      var montoProductos = parseInt(cantidadAñadida) + parseInt(arregloCarro[indiceEnCarro].cantidad);
      
  
      arregloCarro[indiceEnCarro].precio = new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(parseInt(objetoCarro.precio.replace(/[^0-9]+/g, "")))
      console.log(arregloCarro[indiceEnCarro].precio)
      
  
      arregloCarro[indiceEnCarro].cantidad = montoProductos ;
      arregloCarro[indiceEnCarro].totalProducto = parseInt(arregloCarro[indiceEnCarro].precio.replace(/[^0-9]+/g, "")) * arregloCarro[indiceEnCarro].cantidad;

    alert("Cantidad Modificada")
    $(".vacio").hide()
  }else{    
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
    totalProductoCarro.textContent = new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(element.totalProducto)

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
    
    total()
    indice ++;
  });
 
  document.querySelectorAll(".iconoEliminar").forEach(el => {
    el.addEventListener("click", e => {
      idEliminar = e.target.getAttribute("id")[e.target.getAttribute("id").length - 1];
      
      idContenedorProducto = "#contenedorProducto-" + idEliminar;
  
      idNombreProducto = "#nombre-" + idEliminar;
    
      for (let i = 0; i < arregloCarro.length; i++) {
        let elemento = arregloCarro[i];
        if ($(idNombreProducto).text() == elemento.nombre){
          arregloCarro.splice(i,1);
        }
      }
      
      $(idContenedorProducto).remove();
      
      console.log(arregloCarro)

      if(arregloCarro.length == 0){
        $(".contenedorProducto").remove();
        $(".totalBruto").remove();
        $("#headTablaCarro").hide();
        $(".vacio").show();
        $("#footerTabla").hide()
        $(".totalBruto").remove();
        $(".totalIVA").remove();
      }
      
      total()
    });
  });
})

$("#agregarAlCarroModal").on("click",function(){
  $(".contenedorProducto").remove();
  $(".totalBruto").remove();
  $("#headTablaCarro").show();
  $("#footerTabla").show();
  
  var objetoCarro = { nombre: undefined,
                      imagen: undefined,
                      codigo: undefined,
                      descripcion: undefined,
                      precio: undefined,
                      cantidad: 1,
                      totalProducto: 0
                    }
  var indice = 0;
  var idProducto,nombreCarro,cantidadCarro,precioCarro,imagenCarro,thEliminarCarro;

  idProducto = this.getAttribute("id")[this.getAttribute("id").length - 1];
  
  objetoCarro.nombre = document.getElementById("tituloModal").innerText;
  objetoCarro.imagen = document.getElementById("imagenModal").src;
  objetoCarro.codigo = document.getElementById("codigoModal").innerText;
  objetoCarro.descripcion = document.getElementById("descripcionModal").innerText;
  objetoCarro.precio = document.getElementById("precioModal").innerText;
  objetoCarro.cantidad = document.getElementById("cantidadModal").value;

  if(arregloCarro.find(element => element.nombre == objetoCarro.nombre)){
    var indiceEnCarro = arregloCarro.findIndex(element => element.nombre == objetoCarro.nombre);
    var cantidadAñadida = document.getElementById("cantidadModal").value;
    var montoProductos = parseInt(cantidadAñadida) + parseInt(arregloCarro[indiceEnCarro].cantidad);
    
    arregloCarro[indiceEnCarro].precio = new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(parseInt(objetoCarro.precio.replace(/[^0-9]+/g, "")))
    
    arregloCarro[indiceEnCarro].cantidad = montoProductos ;
    arregloCarro[indiceEnCarro].totalProducto = parseInt(arregloCarro[indiceEnCarro].precio.replace(/[^0-9]+/g, "")) * montoProductos;

    alert("Cantidad Modificada")
    $(".vacio").hide();
  }else{    
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
    totalProductoCarro.textContent = new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(element.totalProducto)

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
    indice ++;
    total()
  });
  
  document.querySelectorAll(".iconoEliminar").forEach(el => {
    el.addEventListener("click", e => {
      idEliminar = e.target.getAttribute("id")[e.target.getAttribute("id").length - 1];
      
      idContenedorProducto = "#contenedorProducto-" + idEliminar;
  
      idNombreProducto = "#nombre-" + idEliminar;
    
      for (let i = 0; i < arregloCarro.length; i++) {
        let elemento = arregloCarro[i];
        if ($(idNombreProducto).text() == elemento.nombre){
          arregloCarro.splice(i,1);
        }
      }
      
      $(idContenedorProducto).remove();
      
      console.log(arregloCarro)

      if(arregloCarro.length == 0){
        $(".contenedorProducto").remove();
        $(".totalBruto").remove();
        $("#headTablaCarro").hide();
        $(".vacio").show();
        $("#footerTabla").hide()
        $(".totalBruto").remove();
        $(".totalIVA").remove();
      }
      
      total()
    });
  });
})


$("#botonVaciarCarro").on("click",function(){
  arregloCarro = [];
  $(".contenedorProducto").remove();
  $(".totalBruto").remove();
  $("#headTablaCarro").hide();
  $(".vacio").show();
  $("#footerTabla").hide()
  $(".totalBruto").remove();
  $(".totalIVA").remove();
  
})



