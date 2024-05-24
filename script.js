let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    //menu fechado tem a class "menu-fechado"
    //menu aberto ele nao tem a class "menu fechado"




    if (menu.classList.contains("menu-fechado")) {
        // Abrir o menu
        menu.classList.remove("menu-fechado")

        //mostrar icones barras
        iconeBarras.style.display = "none"
        //esconder o icone do x
        iconeX.style.display = "inline"
    } else {
        //fechar o menu - adicionar a class menu fechado
        menu.classList.add("menu-fechado")

        //mostrar icone x
        iconeX.style.display = "none"
        //esconder o icone de barras
        iconeBarras.style.display = "inline"
    }
}

onresize = () => {
    menu.classList.remove("menu-fechado")

    iconeBarras.style.display = "none"

    iconeX.style.display = "inline"

}


//carrosel

let banner = document.querySelector(".banner")

let slides = [
    "primeiro-banner",
    "segundo-banner",
    "terceiro-banner"
]

let slideAtual = 0

banner.classList.add(slides[slideAtual])

function mostrarProximoSlide() {
    // remover o slide anterior
    banner.classList.remove(slides[slideAtual])
    //somar 1 ma variavel slideAtual

    if (slideAtual < 2) {
        slideAtual++
    }

    else {
        slideAtual = 0
    }

    //mostrar slide de acordo com o slide 
    banner.classList.add(slides[slideAtual])
}

function mostrarSlideAnterior() {
    // remover o slide anterior
    banner.classList.remove(slides[slideAtual])
    //subtrair 1 na variavel slideAtual
    if (slideAtual > 0) {
        slideAtual--

    } else {
        slideAtual = 2
    }

    //mostrar slide de acordo com o slide 
    banner.classList.add(slides[slideAtual])
}


function selecionarSlide(indiceslide) {
    //Remove o slide atual
    banner.classList.remove(slides[slideAtual])
    //atualiza a variavel com o indice de slide selecionado
    slideAtual = indiceslide
    //mostra o slide selecionado e salvo na variavel
    banner.classList.add(slides[slideAtual])
}


//CARREGAMENTO DINAMICO DOS CASES
let listaCases = [

]

function renderizarCases() {
    //encontrar o elemento para inserir os cards
    let containerCards = document.querySelector(".container-cards")

    let template = ""
    //para cada case da lista cases
    listaCases.forEach(cardCase => {
        //Montar o html do card, passando os atributos do case
        template += ` <div class="card">
        <img src=${cardCase.imagem}alt="">
        <p>${cardCase.descricao }</p>
        <button>Ver mais</button>
    </div>`
    })


    //inserir html dos cases montados no elemento container-cards
    containerCards.innerHTML = template
}