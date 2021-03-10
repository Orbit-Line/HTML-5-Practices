var bd;

function iniciar() {
    zonadatos = document.getElementById("zonadatos");
    boton = document.getElementById("grabar");

    boton.addEventListener("click", agregarobjeto, false);

    var solicitud = indexedDB.open("mibase2");

    solicitud.onsuccess = function (e) {
        bd = e.target.result;
    }
    solicitud.onupgradeneeded = function (e) {
        bd = e.target.result;
        bd.createObjectStore("gente", {
            keyPath: "clave",
            autoIncrement: true
        });
    }
}

function agregarobjeto() {
    var clave = document.getElementById("clave".value);
    var titulo = document.getElementById("texto".value);
    var kcal = document.getElementById("kcal".value);

    var transaction = bd.transaction(["gente"], "readwrite");
    var almacen = transaction.objectStore("gente");

    var agregar = almacen.add({
        clave: clave,
        titulo: titulo,
        kcal: kcal
    });
}
window.addEventListener("load", iniciar, false);