let Dice1 = 0
let Dice2 = 0
let Dice3 = 0
let Dice4 = 0
input.onGesture(Gesture.Shake, function () {
    Dice1 = randint(1, 6)
    basic.showNumber(Dice1)
    Dice2 = randint(1, 6)
    basic.showNumber(Dice2)
    Dice3 = randint(1, 6)
    basic.showNumber(Dice3)
    Dice4 = randint(1, 6)
    basic.showNumber(Dice4)
})
basic.forever(function () {
	
})
