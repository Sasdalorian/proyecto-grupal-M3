var arregloCarro = [];
console.log(arregloCarro.length)

if(arregloCarro.length == 0){
  $("#headTablaCarro").hide();
}
var idProducto,nombreCarro,cantidadCarro,precioCarro,idNombreCarro,imagenCarro,eliminarCarro,thEliminarCarro,totalProductoCarro,totalCarro;

$(".btnAgregar").on("click",function(){
  $(".contenedorProducto").remove();
  $("#headTablaCarro").show();
 
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
    

    arregloCarro[indiceEnCarro].precio = parseInt(objetoCarro.precio.replace(/[^0-9]+/g, ""))
    console.log(arregloCarro[indiceEnCarro].precio)
    

    arregloCarro[indiceEnCarro].cantidad = montoProductos ;
    arregloCarro[indiceEnCarro].totalProducto = arregloCarro[indiceEnCarro].precio * montoProductos;

    alert("Cantidad Modificada")
    $(".vacio").hide()
  }else{    
    alert("Producto añadido");
    console.log(objetoCarro.cantidad);
    arregloCarro.push(objetoCarro);
    $(".vacio").hide()

  }
  
  arregloCarro.forEach(element => {
    var contenedorProductosCarro = document.createElement("tr");
    contenedorProductosCarro.className = "contenedorProducto"
    
    imagenCarro = document.createElement("img");
    imagenCarro.src = element.imagen;
    imagenCarro.style = "width: 100px; height: 100px; ;"

    nombreCarro = document.createElement("th");
    nombreCarro.textContent = element.nombre

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
    eliminarCarro.id = "iconoEliminar"
      
    $("#cuerpoCarro").append(contenedorProductosCarro);
    contenedorProductosCarro.append(imagenCarro);
    contenedorProductosCarro.append(nombreCarro);
    contenedorProductosCarro.append(precioCarro);
    contenedorProductosCarro.append(cantidadCarro);
    contenedorProductosCarro.append(totalProductoCarro)
    contenedorProductosCarro.append(thEliminarCarro);
    
    thEliminarCarro.append(eliminarCarro);

    indice ++;
  });
})

$("#agregarAlCarroModal").on("click",function (){
    $(".contenedorProducto").remove();
    $("#headTablaCarro").show();
   
    var objetoCarro = { nombre: undefined,
                        imagen: undefined,
                        codigo: undefined,
                        descripcion: undefined,
                        precio: undefined,
                        cantidad: 0
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
      var cantidadAñadida = document.getElementById(idCantidad).value;
      var montoProductos = parseInt(cantidadAñadida) + parseInt(arregloCarro[indiceEnCarro].cantidad);
      
      
      arregloCarro[indiceEnCarro].cantidad = montoProductos ;
      arregloCarro[indiceEnCarro].precio = new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(montoProductos * parseInt(objetoCarro.precio.replace(/[^0-9]+/g, "")));
      alert("Cantidad Modificada")
      $(".vacio").hide()
      }else{    
        alert("Producto añadido")
        arregloCarro.push(objetoCarro)
        $(".vacio").hide()
    
      }
    
    
  
    arregloCarro.forEach(element => {
      var contenedorProductosCarro = document.createElement("tr");
      contenedorProductosCarro.className = "contenedorProducto"
      
      imagenCarro = document.createElement("img");
      imagenCarro.src = element.imagen;
      imagenCarro.style = "width: 100px; height: 100px; ;"
  
      nombreCarro = document.createElement("th");
      nombreCarro.textContent = element.nombre
  
      cantidadCarro = document.createElement("th");
      cantidadCarro.id = "cantidadCarro-" + indice
      cantidadCarro.textContent = element.cantidad;
  
      precioCarro = document.createElement("th");
      precioCarro = new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(parseInt(element.precio.replace(/[^0-9]+/g, "")))


      thEliminarCarro = document.createElement("th");

      eliminarCarro = document.createElement("img");
      eliminarCarro.src = "/img/icono-eliminar.png";
      eliminarCarro.style = "height: 20px; width: 25px; filter: brightness(1.1); mix-blen-mode: multiply";
      eliminarCarro.id = "iconoEliminar";
  
      $("#cuerpoCarro").append(contenedorProductosCarro);
      contenedorProductosCarro.append(imagenCarro);
      contenedorProductosCarro.append(nombreCarro);
      contenedorProductosCarro.append(cantidadCarro);
      contenedorProductosCarro.append(precioCarro);
      contenedorProductosCarro.append(thEliminarCarro);
      thEliminarCarro.append(eliminarCarro);
  
      indice ++;
    }
  )
})


