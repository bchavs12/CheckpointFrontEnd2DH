const form = document.querySelector("#form_add_card")
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let inputTitulo = document.querySelector("#titulo")
    let inputDescricao = document.querySelector("#descricao")
    let inputUrl = document.querySelector("#url")

    let tituloh3 = document.createElement('h3')
    tituloh3.classList = "cardtitulo"
    let descricaop = document.createElement('p')
    descricaop.classList = "cardsconteudo"
    let imagem = document.createElement('img')
    imagem.classList = "cardsimg"
    let btnRemover = document.createElement('button')
    btnRemover.classList = "btnremove"

    if (inputTitulo.value == "" || inputDescricao.value == "" || inputUrl.value == "") {
        return alert("Favor preencher todos os campos.")
    }

    if (inputTitulo.value.length < 4 || inputDescricao.value.length < 4) {
        return alert("Título e Descrição precisam ter 4 caracteres ou mais.")
    }

    tituloh3.innerHTML = inputTitulo.value
    descricaop.innerHTML = inputDescricao.value
    imagem.src = inputUrl.value
    btnRemover.innerHTML = "X"

    inputTitulo.value = ""
    inputDescricao.value = ""
    inputUrl.value = ""

    let divCard = document.createElement('div')
    divCard.classList = "cards"
    divCard.appendChild(btnRemover)
    divCard.appendChild(imagem)
    divCard.appendChild(tituloh3)
    divCard.appendChild(descricaop)

    let secao = document.querySelector("#containercards")
    secao.appendChild(divCard)

    btnRemover.addEventListener("click", function () {
        divCard.remove()
    })
})

const btnDarkMode = document.querySelector(".btn_dark_mode")
btnDarkMode.addEventListener("click", function () {
    var element = document.body
    element.classList.toggle("dark_mode");
})