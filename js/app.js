
//Mensagens do slide

const mensagens = [
    "Crie QR Codes sem criar uma conta.",
    "Gere QR para links, textos,email e Telefone.",
    "Baixe em PNG,JPG ou PDF gratuitamente."
];

let indiceAtual = 0;


// Funcao para iniciar o aplicacao
document.addEventListener("DOMContentLoaded",iniciarApp);
function iniciarApp() {
      console.log("Code QR iniciado.");
    identificarPagina();
    
}

//Funcao para identificar as paginas
function identificarPagina() {
    const pagina = window.location.pathname.split("/").pop();
    console.log("Página actual:",pagina);
    if(pagina === "" || pagina === "index.html") 
    {
        iniciarHome();
    }
    if (pagina === "create.html") {
        iniciarCreate();
    }
}

// Funcao para carregar o index.html
function iniciarHome() {
    console.log("Home carregada.");
    iniciarSlider();
}

// Funcao para carregar o create.html
function iniciarCreate(){
    console.log("Página de criação carregada.");
}


//Funcao para fazer o slide funcionar
function iniciarSlider() {
    const texto = document.getElementById("slider-text");
    if (!texto) return;

    texto.textContent = obterMensagemSlide(indiceAtual);
    atualizarBolinhas();

    const bolinhas = document.querySelectorAll(".slider-dots span");

    bolinhas.forEach((bolinha) => {
        bolinha.addEventListener("click", () => {
            indiceAtual = Number(bolinha.dataset.slide);

            texto.textContent = obterMensagemSlide(indiceAtual);

            atualizarBolinhas();
        });
    });

    setInterval(() => {
        indiceAtual++;

        if (indiceAtual >= mensagens.length) {
            indiceAtual = 0;
        }

        texto.textContent = obterMensagemSlide(indiceAtual);

        atualizarBolinhas();

    }, 3000);
}

//Bolinhas do slider

function atualizarBolinhas(){
    const bolinhas= document.querySelectorAll(".slider-dots span");
    bolinhas.forEach((bolinha) =>{
        bolinha.classList.remove("active");
    });

    if (bolinhas[indiceAtual]){
        bolinhas[indiceAtual].classList.add("active");
    }

    
    
}

