import type { UTCOffsetInfo } from './index'

const getOffset = (valueInMinutes: number): UTCOffsetInfo => {
    const sign = Math.sign(valueInMinutes)
    const hours = Math.floor(Math.abs(valueInMinutes) / 60)
    const minutes = Math.abs(valueInMinutes) - hours * 60

    return {
        offset: (sign >= 0 ? '+' : '-')
            + (hours < 10 ? '0' : '')
            + hours
            + ':'
            + (minutes < 10 ? '0' : '')
            + minutes,
        minutes: valueInMinutes,
    }
}

export default [
    getOffset(14 * 60),
    getOffset(13 * 60 + 45),
    getOffset(13 * 60),
    getOffset(12 * 60),
    getOffset(11 * 60),
    getOffset(10 * 60 + 30),
    getOffset(10 * 60),
    getOffset(9 * 60 + 30),
    getOffset(9 * 60),
    getOffset(8 * 60 + 45),
    getOffset(8 * 60),
    getOffset(7 * 60),
    getOffset(6 * 60 + 30),
    getOffset(6 * 60),
    getOffset(5 * 60 + 45),
    getOffset(5 * 60 + 30),
    getOffset(5 * 60),
    getOffset(4 * 60 + 30),
    getOffset(4 * 60),
    getOffset(3 * 60 + 30),
    getOffset(3 * 60),
    getOffset(2 * 60),
    getOffset(1 * 60),
    getOffset(0),
    getOffset(-(1 * 60)),
    getOffset(-(2 * 60)),
    getOffset(-(2 * 60 + 30)),
    getOffset(-(3 * 60)),
    getOffset(-(4 * 60)),
    getOffset(-(5 * 60)),
    getOffset(-(6 * 60)),
    getOffset(-(7 * 60)),
    getOffset(-(8 * 60)),
    getOffset(-(9 * 60)),
    getOffset(-(9 * 60 + 30)),
    getOffset(-(10 * 60)),
    getOffset(-(11 * 60)),
    getOffset(-(12 * 60)),
]
