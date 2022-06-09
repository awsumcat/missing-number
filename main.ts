input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 10; index++) {
        if (index != missing_number) {
            basic.showNumber(index)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(missing_number)
})
let missing_number = 0
missing_number = randint(0, 10)
basic.forever(function () {
	
})
