let kurve = 0
let gerade = 0
let alt_gerade = -99
let alt_kurve = -99
radio.setGroup(26)
basic.showString("U26")
// basic.showArrow(ArrowNames.South)
basic.showString("<-")
let empfind = 4
basic.forever(function () {
    gerade = Math.min(Math.max(input.rotation(Rotation.Pitch), -45), 45)
    gerade = Math.round(gerade / empfind) * empfind
    // if (gerade < 0)
    // basic.showArrow(ArrowNames.North)
    // else if (gerade > 0)
    // basic.showArrow(ArrowNames.South)
    // if (kurve < 0)
    // basic.showArrow(ArrowNames.West)
    // else if (kurve > 0)
    // basic.showArrow(ArrowNames.East)
    // basic.pause(100)
    kurve = Math.min(Math.max(input.rotation(Rotation.Roll), -45), 45)
    kurve = Math.round(kurve / empfind) * empfind
    if (gerade != alt_gerade || kurve != alt_kurve) {
        radio.sendValue("gerade", gerade)
        radio.sendValue("kurve", kurve)
        alt_gerade = gerade
        alt_kurve = kurve
        basic.pause(100)
    }
})
