const feedbackText = document.getElementById("feedbackText");
const btnFeedback = document.getElementById("btnFeedback");

btnFeedback.addEventListener("click", () => {

    const mensagem = feedbackText.value.trim();

    if (mensagem === "") {
        alert("Por favor, escreva o seu feedback.");
        return;
    }

    const numeroWhatsApp = "244955207469";

    const texto = `Olá! Tenho um feedback sobre o Code QR:

${mensagem}`;

    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
});