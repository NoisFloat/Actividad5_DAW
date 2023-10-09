function init() {
    var btnagregar = document.getElementById("add");
    var btneliminar = document.getElementById("remove");
    var hElement = document.getElementById("head");
    var clsName;
    alert(hElement + " | " + clsName);
    //Controlar evento click sobre el botón Agregar
    if (btnagregar.addEventListener) {
        btnagregar.addEventListener("click", function () {
            clsName = document.getElementById("classes").value;
            if (clsName == "formal") {
                hElement.classList.add('formal');
            } else if (clsName == "letterpress") {
                hElement.classList.add('letterpress');
            } else if ("offset") {
                hElement.classList.add('offset');
            }
        }, false);
    }
 
    //Controlar evento click sobre botón Eliminar
    if (btneliminar.addEventListener) {
        btneliminar.addEventListener("click", function () {
            clsName = document.getElementById("classes").value;
            if (clsName == "formal") {
                hElement.classList.remove('formal');
            } else if (clsName == "letterpress") {
                hElement.classList.remove('letterpress');
            } else if ("offset") {
                hElement.classList.remove('offset');
            }
        }, false);
    }
   
}
if (window.addEventListener) {
    window.addEventListener("load", init, false);
}

