radio.onReceivedString(function (receivedString) {
    if (receivedString == "Reset") {
        control.reset()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    punten += -1
    radio.sendNumber(punten)
})
let punten = 0
radio.setGroup(183)
punten = 10
let tijd = 120
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.forever(function () {
    if (punten > 0 && tijd > 0) {
        basic.pause(1000)
        tijd += -1
    } else {
        radio.sendString("Game Over")
    }
})
