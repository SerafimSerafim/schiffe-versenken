function aufruf_LED_Angriff () {
	
}
function aufruf_LED_verteidigen () {
	
}
function aufruf_auf_angriff_prüfen () {
	
}
function aufruf_doAnschalten () {
	
}
function Aufruf_LED_Setzen () {
    basic.setLedColor(0x00ffff)
    basic.clearScreen()
    led.plot(fadenkreuz_x, fadenkreuz_y)
    basic.pause(15O)
    anschalten_array = schiffe
    anschalten_wert = 9
}
let anschalten_wert = 0
let anschalten_array: number[][] = []
let fadenkreuz_y = 0
let fadenkreuz_x = 0
let schiffe: number[][] = []
schiffe = [
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
]
]
let schuesse = [
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0,
0
]
]
fadenkreuz_x = 2
fadenkreuz_y = 2
let angriff_x = -1
let angriff_y = -1
let modus = "setzen"
let schiffe_gesetzt = 0
let schiffe_max = 5
basic.forever(function () {
    if (modus == "setzen") {
        if (schiffe_gesetzt == schiffe_max) {
            modus = "Teamwahl"
            fadenkreuz_x = 2
            fadenkreuz_y = 2
        }
        aufruf_LED_Angriff()
    } else if (modus == "angriff") {
        Aufruf_LED_Setzen()
    } else if (modus == "Verteidigung") {
        aufruf_auf_angriff_prüfen()
        aufruf_LED_verteidigen()
    } else if (modus == "gewonnen") {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # . . . #
            # . # . #
            # . # . #
            . # . # .
            `)
    } else if (modus == "verloren ") {
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # . .
            `)
    } else if (modus == "senden_angriff") {
        basic.setLedColor(0xff0000)
    } else if (modus == "senden_Verteidigung ") {
        basic.setLedColor(0x007fff)
    } else if (modus == "Teamwahl") {
        let team = ""
        if (team == "1") {
            modus = "verteidungung "
        }
    } else {
        radio.sendValue("team", 1)
    }
})
