var carroFade, carroDialog, carroContent, carroHeader, carroTitle, cerrarHeader, carroBody, carroFooter, cerrarFooter, carroComprar;
var carro = [];


//Creacion elementos del carro
function crearCarro(){
    carroFade = document.createElement("div");
    carroFade.className = "modal fade";
    carroFade.id = "carro";
    carroFade.setAttribute("tabindex","-1");
    carroFade.setAttribute("aria-labelledby","exampleModalLabel");
    carroFade.setAttribute("aria-hidden","true")

    carroDialog = document.createElement("div");
    carroDialog.className = "modal-dialog";

    carroContent = document.createElement("div");
    carroContent.className = "modal-content";

    carroHeader = document.createElement("div");
    carroHeader.className = "modal-header";

    carroTitle= document.createElement("h5");
    carroTitle.textContent = "Carro de Compra"

    cerrarHeader = document.createElement("button");
    cerrarHeader.className = "btn-close";
    cerrarHeader.type = "button";
    cerrarHeader.setAttribute("data-bs-dismiss","modal");
    cerrarHeader.setAttribute("aria-label","Close")

    carroBody = document.createElement("div");
    carroBody.className = "modal-body";
    carroBody.id = "contenidoCarro";

    carroFooter = document.createElement("div");
    carroFooter.className = "modal-footer";

    cerrarFooter = document.createElement("button");
    cerrarFooter.type = "button";
    cerrarFooter.className = "btn btn-secondary";
    cerrarFooter.setAttribute("data-bs-dismiss","modal");
    cerrarFooter.textContent = "Cerrar";

    carroComprar = document.createElement("button");
    carroComprar.type = "button";
    carroComprar.className = "btn btn-primary";
    carroComprar.textContent = "Comprar";

    $("#indexMain").append(carroFade);
    carroFade.append(carroDialog);
    carroDialog.append(carroContent);
    carroContent.append(carroHeader);
    carroHeader.append(carroTitle);
    carroHeader.append(cerrarHeader);
    carroContent.append(carroBody);
    carroContent.append(carroFooter);
    carroFooter.append(cerrarFooter);
    carroFooter.append(carroComprar);
}

function agregarAlCarro(){
    
}

//flujo de funciones
crearCarro();








