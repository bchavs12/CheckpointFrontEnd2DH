let form = document.querySelector("#form_add_card");
console.log(form)

let inputTitulo = document.getElementById("titulo");
let inputDescricao = document.querySelector("#descricao");
let inputUrl = document.querySelector("#url");
let botaoSubmit = document.querySelector("#enviar");
window.addEventListener('load', () => {
    botaoSubmit.disabled = true;
    botaoSubmit.style.backgroundColor = "#a35e0f";
});

let validacaoTitulo = document.querySelector("#validaTitulo");
let validacaoDescricao = document.querySelector("#validaDescricao");
let validacaoUrl = document.querySelector("#validaUrl");
let validacaoGeral = false;

inputTitulo.addEventListener("mouseout", () => validaCampos("titulo"));
inputDescricao.addEventListener("mouseout", () => validaCampos("descricao"));
inputUrl.addEventListener("mouseout", () => validaCampos("url"));

function validaCampos(nomeCampo){
    if(nomeCampo=="titulo" && inputTitulo.value.length<4){
        validacaoTitulo.textContent = "Titulo precisa ter no minimo 4 caracteres";
    }else if(nomeCampo=="titulo" && inputTitulo.value.length>=4){
        validacaoTitulo.textContent = "";
    }

    if(nomeCampo=="descricao" && inputDescricao.value.length<4){
        validacaoDescricao.textContent = "Descricao precisa ter no minimo 4 caracteres";
    }else if(nomeCampo=="descricao" && inputDescricao.value.length>=4){
        validacaoDescricao.textContent = "";
    }

    if(nomeCampo=="url" && !( inputUrl.value.includes(".jpg") || inputUrl.value.includes(".png") || inputUrl.value.includes(".jpeg") )){
        validacaoUrl.textContent = "Informe uma URL de imagem válida!";
    }else if(nomeCampo=="url"){
        validacaoUrl.textContent = "";
    }

    if(validacaoUrl.textContent != "" || validacaoTitulo.textContent != "" || validacaoDescricao.textContent != "" 
        || inputUrl.value == "" || inputTitulo.value == "" || inputDescricao.value == "" ){
        botaoSubmit.disabled = true;
        botaoSubmit.style.backgroundColor = "#a35e0f";
    }else{
        botaoSubmit.disabled = false;
        botaoSubmit.style.backgroundColor = "#fd951f";
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let tituloh3 = document.createElement('h3')
    tituloh3.classList = "cardtitulo"
    let descricaop = document.createElement('p')
    descricaop.classList = "cardsconteudo"
    let imagem = document.createElement('img')
    imagem.classList = "cardsimg"
    let btnRemover = document.createElement('button')
    btnRemover.classList = "btnremove"

    tituloh3.innerHTML = inputTitulo.value
    descricaop.innerHTML = inputDescricao.value
    imagem.src = inputUrl.value
    btnRemover.innerHTML = "X"

    inputTitulo.value = ""
    inputDescricao.value = ""
    inputUrl.value = ""

    let divCard = document.createElement('div')
    divCard.classList = "cards"
    let divImage = document.createElement('div')
    divImage.style.position = "relative";
    divImage.style.width = "450px";

    divCard.appendChild(divImage)
    divImage.appendChild(btnRemover)
    divImage.appendChild(imagem)
    divCard.appendChild(tituloh3)
    divCard.appendChild(descricaop)
    divCard.style.textAlign = "center";

    let secao = document.querySelector("#containercards")
    secao.appendChild(divCard)

    btnRemover.addEventListener("click", function () {
        divCard.remove()
    })
})

/*const btnDarkMode = document.querySelector(".btn_dark_mode")
btnDarkMode.addEventListener("click", function () {
    var element = document.body
    element.classList.toggle("dark_mode");
})*/