function aufruf_LED_Angriff () {
	
}
function aufruf_LED_verteidigen () {
	
}
function aufruf_auf_angriff_prüfen () {
	
}
function aufruf_doAnschalten () {
	
}
function Aufruf_LED_Setzen () {
	
}
let schiffe = [
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
let fadenkreuz_x = 2
let fadenkreuz_y = 2
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
    } else {
    	
    }
})
