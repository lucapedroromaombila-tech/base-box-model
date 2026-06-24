
function opcao() {
    var visit = document.getElementById("btnVisita");
    var part = document.getElementById("btnParticipante");

    if (visit == true) {
        alert("ola");
    }
    if (part == true) {
        alert("oi");
    }
}

btnVisita.addEventListener("click", opcao);
btnParticipante.addEventListener("click", opcao);