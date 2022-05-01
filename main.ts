input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(contador)
})
input.onButtonPressed(Button.A, function () {
    contador += 1
})
input.onButtonPressed(Button.AB, function () {
    contador = 0
})
input.onButtonPressed(Button.B, function () {
    contador += -1
})
let contador = 0
basic.showString("Contador")
contador = 0
basic.forever(function () {
    if (contador > 10) {
        contador = 0
    } else {
        if (contador < 0) {
            contador = 10
        }
    }
})
