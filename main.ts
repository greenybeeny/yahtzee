let StoredDice4 = 0
let Dice4 = 0
let StoredDice1 = 0
let Dice1 = 0
let StoredDice5 = 0
let Dice5 = 0
let StoredDice2 = 0
let Dice2 = 0
let StoredDice3 = 0
let Dice3 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Yes)
    StoredDice4 = Dice4
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    StoredDice1 = Dice1
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Yes)
    StoredDice5 = Dice5
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    StoredDice2 = Dice2
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Yes)
    StoredDice3 = Dice3
})
input.onGesture(Gesture.Shake, function () {
    Dice1 = randint(1, 6)
    basic.showNumber(Dice1)
    Dice2 = randint(1, 6)
    basic.showNumber(Dice2)
    Dice3 = randint(1, 6)
    basic.showNumber(Dice3)
    Dice4 = randint(1, 6)
    basic.showNumber(Dice4)
    Dice5 = randint(1, 6)
    basic.showNumber(Dice5)
})
basic.forever(function () {
    basic.showString("D#1")
    basic.showNumber(Dice1)
    basic.showString("D#2")
    basic.showNumber(Dice2)
    basic.showString("D#3")
    basic.showNumber(Dice3)
    basic.showString("D#4")
    basic.showNumber(Dice4)
    basic.showString("D#5")
    basic.showNumber(Dice5)
})
