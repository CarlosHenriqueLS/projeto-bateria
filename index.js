
let botoes = document.querySelectorAll('.drum')

botoes.forEach(botao => {
    botao.addEventListener('click', function() {
        var botaoInnerHTML = this.innerHTML

        switch (botaoInnerHTML) {
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
    })
})

