
const btnPNG = document.getElementById("downloadPNG");
const btnJPG = document.getElementById("downloadJPG");
const btnPDF = document.getElementById("downloadPDF");

// Obtém o QR Code como uma imagem real
function obterCanvasQR() {
    const canvasOriginal = qrPreview.querySelector("canvas");

    if (canvasOriginal && canvasOriginal.width > 0) {
        return canvasOriginal;
    }

    const img = qrPreview.querySelector("img");

    if (!img || !img.complete || img.naturalWidth === 0) {
        throw new Error("Gere um QR Code antes de descarregar.");
    }

    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    return canvas;
}

// Descarrega um ficheiro Blob
function descarregarFicheiro(blob, nome) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = nome;

    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 10000);
}

// Converte o canvas num ficheiro
function converterImagem(canvas, formato, qualidade) {
    return new Promise((resolve, reject) => {
        canvas.toBlob(
            blob => {
                if (blob) {
                    resolve(blob);
                } else {
                    reject(new Error("Não foi possível criar a imagem."));
                }
            },
            formato,
            qualidade
        );
    });
}

// PNG
btnPNG.addEventListener("click", async () => {
    try {
        const canvas = obterCanvasQR();
        const blob = await converterImagem(canvas, "image/png");

        descarregarFicheiro(blob, "QRCode.png");
    } catch (erro) {
        alert(erro.message || "Não foi possível descarregar o PNG.");
    }
});

// JPG
btnJPG.addEventListener("click", async () => {
    try {
        const original = obterCanvasQR();
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = original.width;
        canvas.height = original.height;

        // Fundo branco para o formato JPG
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(original, 0, 0);

        const blob = await converterImagem(
            canvas,
            "image/jpeg",
            1.0
        );

        descarregarFicheiro(blob, "QRCode.jpg");
    } catch (erro) {
        alert(erro.message || "Não foi possível descarregar o JPG.");
    }
});

// PDF
btnPDF.addEventListener("click", () => {
    try {
        const canvas = obterCanvasQR();

        if (!window.jspdf || !window.jspdf.jsPDF) {
            throw new Error("A biblioteca PDF não foi carregada.");
        }

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();

        const imagemPNG = canvas.toDataURL("image/png");

        pdf.addImage(
            imagemPNG,
            "PNG",
            20,
            20,
            170,
            170
        );

        pdf.save("QRCode.pdf");
    } catch (erro) {
        alert(erro.message || "Não foi possível criar o PDF.");
    }
});