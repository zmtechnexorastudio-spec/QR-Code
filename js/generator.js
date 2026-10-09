//Campo onde o utilizador escreve
const qrInput = document.getElementById("qrInput");

//Area onde o QR sera mostrado
const qrPreview = document.getElementById("qr-preview");
const cards = document.querySelectorAll(".type-card");
let tipoAtual = "text";
let qrCode;

//CRiar  a funcao de gerar o qr
function gerarQRCode() {
     const texto = qrInput.value.trim();
    let conteudoQR = "";
    switch (tipoAtual) {
        case "text":
            conteudoQR = texto;
        break;
         case "link":
            conteudoQR = texto.startsWith("http")? texto:"https://" + texto;
        break;
         case "email":
            conteudoQR = "mailto:" + texto;
        break;
         case "phone":
            conteudoQR = "tel:" + texto;
        break;

    }
   
    qrPreview.innerHTML="";
    if (conteudoQR === ""){
        qrPreview.innerHTML = `<p id="placeholder">O seu QR Code aparecerá aqui.</p>`;
        return;
    }
 qrCode = new QRCode(qrPreview, {
        text:conteudoQR,
        width:Number(qrSize.value),
        height:Number(qrSize.value),
        colorDark:qrColor.value,
        colorLight:bgColor.value,
        correctLevel:QRCode.CorrectLevel.H
    });
}

//tornar os cartoes clicaveis
cards.forEach(card =>{
    card.addEventListener("click", ()=>{
        cards.forEach(c=>c.classList.remove("active"));
        card.classList.add("active");
        tipoAtual = card.dataset.type;


switch (tipoAtual){

 

    case "link":
        qrInput.placeholder = "https://exemple.com";
        break;

        case "text":
            qrInput.placeholder = "Digite o texto...";
            break;

            case "email": 
            qrInput.placeholder = "email@exemple.com";
            break;

            case "phone":
                qrInput.placeholder = "+244 900 000 000";
                break;
                
}
        
        gerarQRCode();
    });
});






   

//Atualizar QR automaticamente
qrInput.addEventListener("input",gerarQRCode);

