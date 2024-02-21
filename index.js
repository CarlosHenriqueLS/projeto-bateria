
let botoes = document.querySelectorAll('.drum')

botoes.forEach(function (botao) {
    botao.addEventListener('click', function() {
        var botaoInnerHTML = this.innerHTML
        

        playSound(botaoInnerHTML)
        animacaoBotao(botaoInnerHTML)
    })

    document.addEventListener('keydown', function(event) {
        var teclaPressionada = event.key.toLowerCase()

        playSound(teclaPressionada)
        animacaoBotao(teclaPressionada)
    })

})


function playSound(key) {
    switch (key) {
        case 'w':
            var crash = new Audio('midia/sounds/crash.mp3')
            crash.play()
        break

        case 'a':
            var kickBass = new Audio('midia/sounds/kick-bass.mp3')
            kickBass.play()
        break

        case 's':
            var snare = new Audio('midia/sounds/snare.mp3')
            snare.play()
        break

        case "d":
            var tom1 = new Audio('midia/sounds/tom-1.mp3')
            tom1.play()
        break

        case 'j':
            var tom2 = new Audio('midia/sounds/tom-2.mp3')
            tom2.play()
        break

        case 'k':
            var tom3 = new Audio('midia/sounds/tom-3.mp3')
            tom3.play()
        break

        case 'l':
            var tom4 = new Audio('midia/sounds/tom-4.mp3')
            tom4.play()
        break

        default: console.log(botaoInnerHTML)
    }
}

function animacaoBotao(pressionado){
    var ativo = document.querySelector(`.${pressionado}`)

    ativo.classList.add('pressionada')

    setTimeout(function (){
        ativo.classList.remove('pressionada')
    },100)
}






// function Jogador (nome, idade, campeaoNBA, times) {
//     this.nome = nome
//     this.idade = idade
//     this.campeaoNBA = campeaoNBA
//     this.times = times
//     this.dunk = function (){
//         alert('EEEEEEEEEEEEYY')
//     }
// }

// let jogador4 = new Jogador('Carlos', 20, true, ['Vinicius de Moraes', 'Lar do Menor'])

// jogador4.dunk()

