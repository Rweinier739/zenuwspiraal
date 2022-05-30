input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Sad)
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    punten += -1
    basic.showNumber(punten)
})
let punten = 0
punten = 10
let tijd = 20
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.forever(function () {
    while (punten > 0 && tijd > 0) {
        basic.pause(1000)
        tijd += -1
        basic.showIcon(IconNames.Happy)
    }
    basic.showIcon(IconNames.No)
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    basic.showString("Game over")
})
