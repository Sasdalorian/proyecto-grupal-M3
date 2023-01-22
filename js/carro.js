import { infoProducto } from "./cards";

const carrito = document.getElementById("carrito");
const listaCarrito = document.querySelector("#lista-carrito");
const vaciarCarrito = document.getElementById("#vaciar-carrito");

cargarEventos();

function cargarEventos() {
  productos.addEventListener('click', agregarCarrito);
  carrito.addEventListener('click', eliminar);
  vaciarCarrito.addEventListener('click', vaciar);
  document.addEventListener('DOMContentLoaded', leerLocarStorage);
};

function agregarCarrito(e) {
  e.preventDefault();
  if(e.target.classList.contains('bg-primary')) {
    const producto = e.target.parentElement.parentElement;
    leerDatos(producto);
  };
};

function leerDatos(producto){
  const infoProductos = {
    imagen: producto.querySelector('imagenCard').src,
    nombre: producto.querySelector('card-title').textContent,
    precio: producto.querySelector('precio').textContent,
  }

  insertarCarrito(infoProductos);
};

function insertarCarrito(producto) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${infoProducto.imagen}" width: 100> 
        </td>
        <td>${infoProducto.nombre}</td>
        <td>${infoProducto.precio}</td>
        <td>
            <a href="#" class="vaciar-carrito" productoCodigo="${infoProducto.codigo}">X</a>
        </td>
    `;
    listaCarrito.appendChild(row);
    guardarCarritoLocalStorage(producto);
};

function guardarCarritoLocalStorage(e) {
    e.preventDefault();

    let producto,
        productoCodigo;

    if (e.target.classList.contains('vaciar-carrito')) {
        e.target.parentElement.parentElement.remove();
        producto = e.target.parentElement.parentElement;
        productocodigo = producto.querySelector('a').getAtributte('codigo');
    }
    eliminarProductoLocalStorage(productoCodigo);
}