const qrColor = document.getElementById("qrColor");
const bgColor = document.getElementById("bgColor");
const qrSize = document.getElementById("qrSize");
const sizeValue = document.getElementById("sizeValue");

function atualizarCustomizacao() {
    sizeValue.textContent = qrSize.value + "px";
    gerarQRCode();
}
qrColor.addEventListener("input", atualizarCustomizacao);
bgColor.addEventListener("input", atualizarCustomizacao);
qrSize.addEventListener("input", atualizarCustomizacao);
