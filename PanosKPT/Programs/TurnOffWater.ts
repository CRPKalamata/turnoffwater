let sec = 0
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 900) {
        basic.pause(1000)
        sec += 1
    } else {
        sec = 0
    }
    greekled.showNumber(sec)
})
basic.forever(function () {
    if (sec > 60) {
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
    if (sec >= 40 && sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    ) > 40) {
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
})
