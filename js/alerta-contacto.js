
function alerta(){

    var nombre = document.getElementById("nombre-contacto").value;
    var apellido = document.getElementById("apellido-contacto").value;
    var correo = document.getElementById("correo-contacto").value;
    var region = document.getElementById("region-contacto").value;
    var comuna = document.getElementById("comuna-contacto").value;
    var areaTexto = document.getElementById("area-texto").value;
    var arregloEntradas = [];
    
    if(nombre == ""){
        arregloEntradas.push("Nombre")
    }
    if(apellido == ""){
        arregloEntradas.push("Apellido")
    }
    if(correo == "" || !correo.includes("@")){
        arregloEntradas.push("Correo")
    }
    if(region == ""){
        arregloEntradas.push("Region")
    }
    if(comuna == "-" || comuna == "Comuna"){
        arregloEntradas.push("Comuna")
        document.getElementById('comuna-contacto').value = "";
    }
    
    if(areaTexto == ""){
        arregloEntradas.push("Mensaje")
    }


    if(arregloEntradas.length > 0){
        $('#prueba-alerta').show();
        var lista=document.getElementById("lista-alerta");

        arregloEntradas.forEach(function(campo) {
            var lineaNueva= document.createElement("li");
            var contenido = document.createTextNode(campo)
            lista.appendChild(lineaNueva);
            lineaNueva.appendChild(contenido);
        })
        document.getElementById("formulario").addEventListener("click", function(event){
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
        });
    }else{
        $('#confirmacion-envio').show();
    }
}

function ocultarConfirmacion(){
    $('#confirmacion-envio').hide();
}

function ocultarDiv(){
    $('#prueba-alerta').hide();
    
    arregloEntradas = [];
    lista = "";
    contenido = "";
    lineaNueva = "";
    document.getElementById("lista-alerta").innerHTML = ""
}


function desplegarComuna(){
 
    document.getElementById("comuna-contacto").innerHTML = "";
    let region = document.getElementById("region-contacto").value;
    let listaComunas = document.getElementById("comuna-contacto");

    switch(region){
        case "arica": 
            let comunas1 = ["-","Arica", "Camarones", "Putre", "General Lagos"];
            comunas1.sort();
            comunas1.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            document.getElementById('comuna-contacto').setAttribute('value', "")
            
            break;
        
        case "tarapaca":
            let comunas2 = ["-","Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"];
            comunas2.sort();
            comunas2.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;

        case "antofagasta":
            let comunas3 = ["-","Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
            comunas3.sort();
            comunas3.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        
        case "atacama":
            let comunas4 = ["-","Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
            comunas4.sort();
            comunas4.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        
        case "coquimbo":
            let comunas5 = ["-","La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
            comunas5.sort();
            comunas5.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        
        case "valparaiso":
            let comunas6 = ["-","Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
            comunas6.sort();
            comunas6.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        
        case "o’Higgins":
            let comunas7 = ["-","Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
            comunas7.sort();
            comunas7.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        
        case "maule":
            let comunas8 = ["-","Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
            comunas8.sort();
            comunas8.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;

        case "biobio":
            let comunas9 = ["-","Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"]
            comunas9.sort();
            comunas9.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;

        case "araucania":
            let comunas10 = ["-","Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria", ]
            comunas10.sort();
            comunas10.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;

        case "rios":
            let comunas11 = ["-","Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
            comunas11.sort();
            comunas11.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        case "lagos":
            let comunas12 = ["-","Puerto Montt", "Calbuco", "Cochamó", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
            comunas12.sort();
            comunas12.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        case "aisen":
            let comunas13 = ["-","Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
            comunas13.sort();
            comunas13.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        case "magallanes":
            let comunas14 = ["-","Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
            comunas14.sort();
            comunas14.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        case "metropolitana":
            let comunas15 = ["-","Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
            comunas15.sort();
            comunas15.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
    }
}

