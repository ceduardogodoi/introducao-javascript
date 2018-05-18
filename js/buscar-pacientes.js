var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(event) {
    console.log("Buscando pacientes...");
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes111");

    xhr.addEventListener("load", function() {
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.style.color = "red";
            erroAjax.classList.remove("invisivel");

            // Vídeo parou em 5:00 (Aula 09 Exercício 05)
            // url contém erro proposital para simular o erro
            // lembre-se de arruma-la
        }
    });

    xhr.send();
});
