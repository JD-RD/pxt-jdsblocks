
/**
 * JD's Custom blocks
 */
//% weight=100 color=#FF7133 icon=""
namespace JDsBlocks {
    /**
     * Plot LEDs by their number, from top left (1) to bottom
     * right (2) for a given duration
     * @param ledNumber The led number to plot (1-25)
     * @param duration The amount of time the led is to be displayed
     */
    //% block="plot led number %ledNumber for %duration (ms)"
    //% ledNumber.defl=1 duration.min=0 duration.defl=1000
    //% inlineInputMode=inline
    export function plotLedNumberMS(ledNumber: number, duration: number): void {
        switch (ledNumber) {
            case 1:
                plotLedCoordinatePause(0, 0, duration)
                break
            case 2:
                plotLedCoordinatePause(1, 0, duration)
                break
            case 3:
                plotLedCoordinatePause(2, 0, duration)
                break
            case 4:
                plotLedCoordinatePause(3, 0, duration)
                break
            case 5:
                plotLedCoordinatePause(4, 0, duration)
                break
            case 6:
                plotLedCoordinatePause(0, 1, duration)
                break
            case 7:
                plotLedCoordinatePause(1, 1, duration)
                break
            case 8:
                plotLedCoordinatePause(2, 1, duration)
                break
            case 9:
                plotLedCoordinatePause(3, 1, duration)
                break
            case 10:
                plotLedCoordinatePause(4, 1, duration)
                break
            case 11:
                plotLedCoordinatePause(0, 2, duration)
                break
            case 12:
                plotLedCoordinatePause(1, 2, duration)
                break
            case 13:
                plotLedCoordinatePause(2, 2, duration)
                break
            case 14:
                plotLedCoordinatePause(3, 2, duration)
                break
            case 15:
                plotLedCoordinatePause(4, 2, duration)
                break
            case 16:
                plotLedCoordinatePause(0, 3, duration)
                break
            case 17:
                plotLedCoordinatePause(1, 3, duration)
                break
            case 18:
                plotLedCoordinatePause(2, 3, duration)
                break
            case 19:
                plotLedCoordinatePause(3, 3, duration)
                break
            case 20:
                plotLedCoordinatePause(4, 3, duration)
                break
            case 21:
                plotLedCoordinatePause(0, 4, duration)
                break
            case 22:
                plotLedCoordinatePause(1, 4, duration)
                break
            case 23:
                plotLedCoordinatePause(2, 4, duration)
                break
            case 24:
                plotLedCoordinatePause(3, 4, duration)
                break
            case 25:
                plotLedCoordinatePause(4, 4, duration)
                break

        }
    }

    /**
     * Plot LEDs by their number, from top left (1) to bottom
     * right (2) for a given duration
     * @param ledNumber The led number to plot (1-25)
     */
    //% block="plot led number %ledNumber"
    //% ledNumber.defl=1
    //% inlineInputMode=inline
    export function plotLedNumber(ledNumber: number): void {
        switch (ledNumber) {
            case 1:
                led.plot(0, 0)
                break
            case 2:
                led.plot(1, 0)
                break
            case 3:
                led.plot(2, 0)
                break
            case 4:
                led.plot(3, 0)
                break
            case 5:
                led.plot(4, 0)
                break
            case 6:
                led.plot(0, 1)
                break
            case 7:
                led.plot(1, 1)
                break
            case 8:
                led.plot(2, 1)
                break
            case 9:
                led.plot(3, 1)
                break
            case 10:
                led.plot(4, 1)
                break
            case 11:
                led.plot(0, 2)
                break
            case 12:
                led.plot(1, 2)
                break
            case 13:
                led.plot(2, 2)
                break
            case 14:
                led.plot(3, 2)
                break
            case 15:
                led.plot(4, 2)
                break
            case 16:
                led.plot(0, 3)
                break
            case 17:
                led.plot(1, 3)
                break
            case 18:
                led.plot(2, 3)
                break
            case 19:
                led.plot(3, 3)
                break
            case 20:
                led.plot(4, 3)
                break
            case 21:
                led.plot(0, 4)
                break
            case 22:
                led.plot(1, 4)
                break
            case 23:
                led.plot(2, 4)
                break
            case 24:
                led.plot(3, 4)
                break
            case 25:
                led.plot(4, 4)
                break

        }
    }

    /**
     * Unplot LEDs by their number, from top left (1) to bottom
     * right (2) for a given duration
     * @param ledNumber The led number to plot (1-25)
     */
    //% block="unplot led number %ledNumber"
    //% ledNumber.defl=1
    //% inlineInputMode=inline
    export function unplotLedNumber(ledNumber: number): void {
        switch (ledNumber) {
            case 1:
                led.unplot(0, 0)
                break
            case 2:
                led.unplot(1, 0)
                break
            case 3:
                led.unplot(2, 0)
                break
            case 4:
                led.unplot(3, 0)
                break
            case 5:
                led.unplot(4, 0)
                break
            case 6:
                led.unplot(0, 1)
                break
            case 7:
                led.unplot(1, 1)
                break
            case 8:
                led.unplot(2, 1)
                break
            case 9:
                led.unplot(3, 1)
                break
            case 10:
                led.unplot(4, 1)
                break
            case 11:
                led.unplot(0, 2)
                break
            case 12:
                led.unplot(1, 2)
                break
            case 13:
                led.unplot(2, 2)
                break
            case 14:
                led.unplot(3, 2)
                break
            case 15:
                led.unplot(4, 2)
                break
            case 16:
                led.unplot(0, 3)
                break
            case 17:
                led.unplot(1, 3)
                break
            case 18:
                led.unplot(2, 3)
                break
            case 19:
                led.unplot(3, 3)
                break
            case 20:
                led.unplot(4, 3)
                break
            case 21:
                led.unplot(0, 4)
                break
            case 22:
                led.unplot(1, 4)
                break
            case 23:
                led.unplot(2, 4)
                break
            case 24:
                led.unplot(3, 4)
                break
            case 25:
                led.unplot(4, 4)
                break

        }
    }

    /**
     * Plot led by coordinate (x, y) and add a pause
     * @param x The x value of the led to plot
     * @param y The y value of the led to plot
     * @param pause The pause duration (ms)
     */
    export function plotLedCoordinatePause(x: number, y: number, pause: number): void {
        led.plot(x, y)
        basic.pause(pause)
        led.unplot(x, y)
    }

    /**
     * Returns either a given LED is On of Off
     * @param ledNumber The LED number to check
     */
    //% block="LED  %ledNumber On?"
    //% ledNumber.defl=1 ledNumber.min=1 ledNumber.max=25
    //% inlineInputMode=inline
    export function isLEDNumberOn(ledNumber: number): boolean {
        let status = false
        switch (ledNumber) {
            case 1:
                if (led.point(0, 0)) {
                    status = true
                }
                break
            case 2:
                if (led.point(1, 0)) {
                    status = true
                }
                break
            case 3:
                if (led.point(2, 0)) {
                    status = true
                }
                break
            case 4:
                if (led.point(3, 0)) {
                    status = true
                }
                break
            case 5:
                if (led.point(4, 0)) {
                    status = true
                }
                break
            case 6:
                if (led.point(0, 1)) {
                    status = true
                }
                break
            case 7:
                if (led.point(1, 1)) {
                    status = true
                }
                break
            case 8:
                if (led.point(2, 1)) {
                    status = true
                }
                break
            case 9:
                if (led.point(3, 1)) {
                    status = true
                }
                break
            case 10:
                if (led.point(4, 1)) {
                    status = true
                }
                break
            case 11:
                if (led.point(0, 2)) {
                    status = true
                }
                break
            case 12:
                if (led.point(1, 2)) {
                    status = true
                }
                break
            case 13:
                if (led.point(2, 2)) {
                    status = true
                }
                break
            case 14:
                if (led.point(3, 2)) {
                    status = true
                }
                break
            case 15:
                if (led.point(4, 2)) {
                    status = true
                }
                break
            case 16:
                if (led.point(0, 3)) {
                    status = true
                }
                break
            case 17:
                if (led.point(1, 3)) {
                    status = true
                }
                break
            case 18:
                if (led.point(2, 3)) {
                    status = true
                }
                break
            case 19:
                if (led.point(3, 3)) {
                    status = true
                }
                break
            case 20:
                if (led.point(4, 3)) {
                    status = true
                }
                break
            case 21:
                if (led.point(0, 4)) {
                    status = true
                }
                break
            case 22:
                if (led.point(1, 4)) {
                    status = true
                }
                break
            case 23:
                if (led.point(2, 4)) {
                    status = true
                }
                break
            case 24:
                if (led.point(3, 4)) {
                    status = true
                }
                break
            case 25:
                if (led.point(4, 4)) {
                    status = true
                }
                break
        }
        return status
    }
}
