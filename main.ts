radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(input.temperature())
})
