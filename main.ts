let StoredDice3 = 0
let Dice3 = 0
let StoredDice1 = 0
let Dice1 = 0
let StoredDice5 = 0
let Dice5 = 0
let StoredDice2 = 0
let Dice2 = 0
let StoredDice4 = 0
let Dice4 = 0
let shakecount = 0
input.onPinPressed(TouchPin.P0, function () {
    if (StoredDice3 > 0) {
        StoredDice3 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoredDice3 = Dice3
    }
})
input.onButtonPressed(Button.A, function () {
    if (StoredDice1 > 0) {
        StoredDice1 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoredDice1 = Dice1
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (StoredDice5 > 0) {
        StoredDice5 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoredDice5 = Dice5
    }
})
input.onButtonPressed(Button.B, function () {
    if (StoredDice2 > 0) {
        StoredDice2 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoredDice2 = Dice2
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (StoredDice4 > 0) {
        StoredDice4 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoredDice4 = Dice4
    }
})
input.onGesture(Gesture.Shake, function () {
    shakecount = shakecount + 1
    Dice1 = randint(1, 6)
    Dice2 = randint(1, 6)
    Dice3 = randint(1, 6)
    Dice4 = randint(1, 6)
    Dice5 = randint(1, 6)
})
basic.forever(function () {
    if (shakecount > 2 || (StoredDice1 != 0 && StoredDice2 != 0) != 0 && (StoredDice3 != (StoredDice5 != 0 && Dice4 != 0) && false)) {
        shakecount = 0
        basic.showString("Shake")
    } else {
        if (input.buttonIsPressed(Button.AB)) {
            if (StoredDice1 > 0) {
                basic.showString("S#1")
                basic.showNumber(StoredDice1)
            } else {
                basic.showString("S#1")
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
            if (StoredDice2 > 0) {
                basic.showString("S#2")
                basic.showNumber(StoredDice2)
            } else {
                basic.showString("S#2")
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
            if (StoredDice3 > 0) {
                basic.showString("S#3")
                basic.showNumber(StoredDice3)
            } else {
                basic.showString("S#3")
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
            if (StoredDice4 > 0) {
                basic.showString("S#4")
                basic.showNumber(StoredDice4)
            } else {
                basic.showString("S#4")
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
            if (StoredDice5 > 0) {
                basic.showString("S#5")
                basic.showNumber(StoredDice5)
            } else {
                basic.showString("S#5")
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
        } else {
            if (Dice1 == 0) {
                basic.showString("Shake")
            } else {
                if (StoredDice1 > 0) {
                    basic.showString("D#1")
                    basic.showNumber(StoredDice1)
                } else {
                    basic.showString("D#1")
                    basic.showNumber(Dice1)
                }
                if (StoredDice2 > 0) {
                    basic.showString("D#2")
                    basic.showNumber(StoredDice2)
                } else {
                    basic.showString("D#2")
                    basic.showNumber(Dice2)
                }
                if (StoredDice3 > 0) {
                    basic.showString("D#3")
                    basic.showNumber(StoredDice3)
                } else {
                    basic.showString("D#3")
                    basic.showNumber(Dice3)
                }
                if (StoredDice4 > 0) {
                    basic.showString("D#4")
                    basic.showNumber(StoredDice4)
                } else {
                    basic.showString("D#4")
                    basic.showNumber(Dice4)
                }
                if (StoredDice5 > 0) {
                    basic.showString("D#5")
                    basic.showNumber(StoredDice5)
                } else {
                    basic.showString("D#5")
                    basic.showNumber(Dice5)
                }
            }
        }
    }
})
