var navbar = document.querySelector('header');
navbar.innerHTML = '<div class="title">' +
'<img src="./img/82d56c2dc1e34a7ac0a165f51d511875.png" alt="No hay imagen" style="background: transparent;">' +
'</div>' +
'<!--ACA EMPIEZA NAVBAR-->' +
'<nav class="navbar navbar-expand-lg">' +
'<div class="container-fluid">' +
    '<a class="navbar-brand" href="./cachureando.html">Inicio</a>' +
    '<button class="navbar-toggler" type="button" data-bs-toggle="collapse"' +
        'data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"' +
        'aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span>'+
    '</button>'+
    '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
        '<ul class="navbar-nav me-auto mb-2 mb-lg-0">'+
            '<li class="nav-item">'+
                '<a class="nav-link active" aria-current="page" href="./services.html">Ofertas</a>'+
            '</li>'+
            '<li class="nav-item">'+
                '<a class="nav-link" href="./services.html"></a>'+
            '</li>'+
            '<li class="nav-item dropdown">'+
                '<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"'+
                    'aria-expanded="false">'+
                    'Categorias'+
                '</a>'+
                '<ul class="dropdown-menu">'+
                    '<li><a class="dropdown-item" href="#">Categoria 1</a></li>'+
                    '<li><a class="dropdown-item" href="#">Categoria 2</a></li>'+
                    '<li>'+
                        '<hr class="dropdown-divider">'+
                   '</li>'+
                    '<li><a class="dropdown-item" href="#">Todas las Categorias</a></li>'+
                '</ul>'+
            '</li>'+
            '<!--<li class="nav-item">'+
                '<a class="nav-link disabled">Disabled</a>'+
            '</li>-->'+
        '</ul>'+
        '<form class="d-flex" role="search">'+
            '<input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">'+
            '<button class="btn btn-outline-success" type="submit">Buscar</button>'+
        '</form>'+
    '</div>'+
'</div>'+
'</nav>';

var headhead = document.querySelector('head')
headhead.innerHTML = headhead.innerHTML + '<link href="./css/bootstrap.min.css" rel="stylesheet">'+
'<link rel="stylesheet" href="./css/style.css">'