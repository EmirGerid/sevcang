let Level = 0
input.onButtonPressed(Button.A, function () {
    Level = input.lightLevel()
    basic.showNumber(Level)
})
