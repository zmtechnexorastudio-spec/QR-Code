const translations = {

    pt: {
        qrforfree: "Criar QR Gratuitamente",
        qrforfree2: "Criar QR Gratuitamente",
        qrsecond: "Crie QR Codes em segundos.",

        howItWorks: "Como Funciona?",
        step1: "Escolha o tipo de QR Code.",
        step2: "Preencha as informações.",
        step3: "Baixe seu QR Code.",

        whyCodeQR: "Por que escolher o Code QR?",

        fast: "Rápido.",
        fastDescription: "Crie QR Codes em poucos segundos.",

        safe: "Seguro.",
        safeDescription: "Sem necessidade de criar conta.",

        simple: "Simples.",
        simpleDescription: "Interface limpa e fácil de usar.",

        version: "Versão v1.0",
        madeInAngola: "Feito em Angola",

        slide0: "Crie QR Codes sem criar uma conta.",
        slide1: "Gere QR para links, textos,email e Telefone.",
        slide2: "Baixe em PNG,JPG ou PDF gratuitamente."
    },

    en: {
        qrforfree: "Create QR For Free",
        qrforfree2: "Create QR For Free",
        qrsecond: "Create QR Codes in seconds.",

        howItWorks: "How Does It Work?",
        step1: "Choose the type of QR Code.",
        step2: "Fill in the information.",
        step3: "Download your QR Code.",

        whyCodeQR: "Why choose Code QR?",

        fast: "Fast.",
        fastDescription: "Create QR Codes in just a few seconds.",

        safe: "Secure.",
        safeDescription: "No account required.",

        simple: "Simple.",
        simpleDescription: "Clean and easy-to-use interface.",

        version: "Version v1.0",
        madeInAngola: "Made in Angola",

        slide0: "Create QR Codes without creating an account.",
        slide1: "Generate QR Codes for links, texts, email and phone.",
        slide2: "Download in PNG, JPG or PDF for free."
    }

};

let idiomaAtual = "pt";

function aplicarIdioma() {

    const textos = translations[idiomaAtual];

    document.getElementById("qrforfree").textContent = textos.qrforfree;
    document.getElementById("qrforfree2").textContent = textos.qrforfree2;

    document.getElementById("qrsecond").textContent = textos.qrsecond;

    document.getElementById("howItWorks").textContent = textos.howItWorks;

    document.getElementById("step1").textContent = textos.step1;
    document.getElementById("step2").textContent = textos.step2;
    document.getElementById("step3").textContent = textos.step3;

    document.getElementById("whyCodeQR").textContent = textos.whyCodeQR;

    document.getElementById("fast").textContent = textos.fast;
    document.getElementById("fastDescription").textContent = textos.fastDescription;

    document.getElementById("safe").textContent = textos.safe;
    document.getElementById("safeDescription").textContent = textos.safeDescription;

    document.getElementById("simple").textContent = textos.simple;
    document.getElementById("simpleDescription").textContent = textos.simpleDescription;

    document.getElementById("version").textContent = textos.version;
    document.getElementById("madeInAngola").textContent = textos.madeInAngola;

   
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

function obterMensagemSlide(indice) {

    const textos = translations[idiomaAtual];

    const slides = [
        textos.slide0,
        textos.slide1,
        textos.slide2
    ];

    return slides[indice];
}