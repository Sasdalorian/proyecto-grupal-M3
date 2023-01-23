arregloCarro = [];

$(".btnAgregar").on("click",function(){

  var objetoCarro = { nombre: undefined,
                      imagen: undefined,
                      codigo: undefined,
                      descripcion: undefined,
                      precio: undefined,
                      cantidad: undefined
                    }
  var idProducto,nombreCarro,cantidadCarro,precioCarro,idNombreCarro,imagenCarro;
  
  idProducto = this.getAttribute("id")[this.getAttribute("id").length - 1];
  
  var idNombreCarro = "nombreProducto-" + idProducto;
  var idCantidad = "cantidad" + idProducto
  var idImagenCarro = "img-" + idProducto;
  var idPrecioCarro = "precio-" + idProducto;
  var idCodigoCarro = "codigo-" + idProducto;
  var idDescripcion = "codigo-" + idProducto;
  
  objetoCarro.nombre = document.getElementById(idNombreCarro).innerText;
  objetoCarro.imagen = document.getElementById(idImagenCarro).src;
  objetoCarro.codigo = document.getElementById(idCodigoCarro).innerText;
  objetoCarro.descripcion = document.getElementById(idDescripcion).innerText;
  objetoCarro.precio = document.getElementById(idPrecioCarro).innerText;
  objetoCarro.cantidad = document.getElementById(idCantidad).value;

  if(arregloCarro.includes(objetoCarro)){
    
    
    
    
  }else{
    arregloCarro.push(objetoCarro)
    console.log("no existe")
  }
  
  arregloCarro.forEach(element => {
    var contenedorProductosCarro = document.createElement("tr");
    
    imagenCarro = document.createElement("img");
    imagenCarro.src = element.imagen;
    imagenCarro.style = "width: 100px; height: 100px; ;"

    nombreCarro = document.createElement("th");
    nombreCarro.textContent = element.nombre

    cantidadCarro = document.createElement("th");
    cantidadCarro.textContent = element.cantidad

    precioCarro = document.createElement("th");
    precioCarro = element.precio;
    

    $("#cuerpoCarro").append(contenedorProductosCarro);
    contenedorProductosCarro.append(imagenCarro)
    contenedorProductosCarro.append(nombreCarro)
    contenedorProductosCarro.append(cantidadCarro)
    contenedorProductosCarro.append(precioCarro)
    
  });
 
  


 



  
  
  
})
