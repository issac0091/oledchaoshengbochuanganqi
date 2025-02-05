OLED.init(128, 64)
basic.forever(function () {
    OLED.writeNum(cbit_小车类.Ultrasonic_Car())
    basic.pause(1000)
    OLED.clear()
})
