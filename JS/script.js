function aceitarTermos() {

    const overlay = document.getElementById("termos-overlay");
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = "none";
    }, 300);
}

function recusarTermos() {
    //alert("😥 Precisas de aceitar os termos de uso para navegar na galeria.");
    window.location.href = "https://www.google.com";
}