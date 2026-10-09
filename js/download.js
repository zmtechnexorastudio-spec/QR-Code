const btnPNG = document.getElementById("downloadPNG");
const btnJPG = document.getElementById("downloadJPG");
const btnPDF = document.getElementById("downloadPDF");

// Obtém a imagem do QR Code
function obterImagem() {
    return qrPreview.querySelector("img");
}

// =========================
// DOWNLOAD PNG
// =========================

btnPNG.addEventListener("click", () => {

    const img = obterImagem();

    if (!img) {
        alert("Gere um QR Code primeiro.");
        return;
    }

    const link = document.createElement("a");

    link.download = "QRCode.png";
    link.href = img.src;

    link.click();
});


// =========================
// DOWNLOAD JPG
// =========================

btnJPG.addEventListener("click", () => {

    const img = obterImagem();

    if (!img) {
        alert("Gere um QR Code primeiro.");
        return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    // Fundo branco
    ctx.fillStyle = "#FFFFFF";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    // Desenha o QR Code
    ctx.drawImage(img, 0, 0);

    const link = document.createElement("a");

    link.download = "QRCode.jpg";

    link.href = canvas.toDataURL(
        "image/jpeg",
        1.0
    );

    link.click();
});


// =========================
// DOWNLOAD PDF
// =========================

btnPDF.addEventListener("click", () => {

    const img = obterImagem();

    if (!img) {
        alert("Gere um QR Code primeiro.");
        return;
    }

    // Verifica se a biblioteca jsPDF existe
    if (!window.jspdf) {
        alert("A biblioteca PDF não foi carregada.");
        return;
    }

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF();

    pdf.addImage(
        img.src,
        "PNG",
        20,
        20,
        170,
        170
    );

    pdf.save("QRCode.pdf");
});