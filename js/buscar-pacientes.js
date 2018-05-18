var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(event) {
    console.log("Buscando pacientes...");
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.send();

    xhr.addEventListener("load", function() {
        console.log(xhr.responseText);
    });
});
