var arregloCarro = [];
console.log(arregloCarro.length)

if(arregloCarro.length == 0){
  $("#headTablaCarro").hide();
}

$(".btnAgregar").on("click",function(){
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
  var idProducto,nombreCarro,cantidadCarro,precioCarro,idNombreCarro,imagenCarro;

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
    arregloCarro[indiceEnCarro].cantidad = parseInt(cantidadAñadida) + parseInt(arregloCarro[indiceEnCarro].cantidad);
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
    precioCarro = element.precio;

    $("#cuerpoCarro").append(contenedorProductosCarro);
    contenedorProductosCarro.append(imagenCarro);
    contenedorProductosCarro.append(nombreCarro);
    contenedorProductosCarro.append(cantidadCarro);
    contenedorProductosCarro.append(precioCarro);

    indice ++;
  });
  


 



  
  
  
})
