const translations = {
    
       pt: {
    home: "Início",
    createQR: "Criar QR Code",
    information: "Informações",
    customization: "Personalização",
    qrColorLabel: "Cor do QR",
    backgroundColorLabel: "Cor do Fundo",
    sizeLabel: "Tamanho",
    preview: "Pré-visualização",
    placeholder: "O seu QR Code aparecerá aqui.",
    feedbackTitle: "Gostou do Code QR?",
    feedbackDescription: "A sua opinião é importante para nós.",
    btnFeedback: "Enviar Feedback.",
    version:"Versão v1.0",
    madeinangola:"Feito em Angola",
    choice:"Escolha um tipo abaixo e preencha as informações.",
    text:"Texto",
    phone:"Telefone",
    downloadPNGText:"Baixar como PNG",
    downloadJPGText: " Baixar como JPG",
    downloadPDFText:"Baixar como PDF",
    
},

en: {
    home: "Home",
    createQR: "Create QR Code",
    information: "Information",
    customization: "Customization",
    qrColorLabel: "QR Color",
    backgroundColorLabel: "Background Color",
    sizeLabel: "Size",
    preview: "Preview",
    placeholder: "Your QR Code will appear here.",
    feedbackTitle: "Did you like Code QR?",
    feedbackDescription: "Your opinion is important for us.",
    btnFeedback: "Send Feedback.",
    version:"Version v1.0",
    madeinangola:"Made in Angola",
    choice:"Choose a type and fill in the information",
    text:"Text",
    phone:"Phone",
    downloadPNGText:"Download as PNG",
    downloadJPGText: " Download as JPG",
    downloadPDFText:"Download as PDF",
   
}
};

let idiomaAtual = "pt";

function aplicarIdioma() {
    const textos = translations[idiomaAtual];

    document.getElementById("home").textContent = textos.home;

    document.getElementById("createQR").textContent = textos.createQR;

    document.getElementById("information").textContent = textos.information;

    document.getElementById("customization").textContent = textos.customization;

    document.getElementById("qrColorLabel").textContent = textos.qrColorLabel;

    document.getElementById("backgroundColorLabel").textContent = textos.backgroundColorLabel;

    document.getElementById("sizeLabel").textContent = textos.sizeLabel;

    document.getElementById("preview").textContent = textos.preview;

    document.getElementById("placeholder").textContent = textos.placeholder;

    document.getElementById("downloadPNGText").textContent = textos.downloadPNGText;

    document.getElementById("downloadJPGText").textContent = textos.downloadJPGText;

   
    document.getElementById("downloadPDFText").textContent = textos.downloadPDFText;

    document.getElementById("btnFeedback").textContent = textos.btnFeedback;

    document.getElementById("feedbackTitle").textContent = textos.feedbackTitle;
    
    document.getElementById("feedbackDescription").textContent = textos.feedbackDescription;

    document.getElementById("version").textContent = textos.version;

    document.getElementById("madeinangola").textContent = textos.madeinangola;

    document.getElementById("choice").textContent = textos.choice;

   document.getElementById("text").textContent = textos.text;

   document.getElementById("phone").textContent = textos.phone;
    
  



}


aplicarIdioma();

document.getElementById("btnPT").addEventListener("click", () => {
    idiomaAtual = "pt";
    aplicarIdioma();
});

document.getElementById("btnEN").addEventListener("click", () => {
    idiomaAtual = "en";
    aplicarIdioma();
});