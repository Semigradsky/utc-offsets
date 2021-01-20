import offsets from './offsets'

export interface UTCOffsetInfo {
    offset: string;
    minutes: number;
}

export const getOffsets = () => offsets.slice()

export const offsetFromMinutes = (minutes: number): string | undefined => {
    return offsets.find((offsetInfo) => offsetInfo.minutes === minutes)?.offset
}

export const minutesFromOffset = (offset: string): number | undefined => {
    return offsets.find((offsetInfo) => offsetInfo.offset === offset)?.minutes
}

export const isValidOffset = (offset: string): boolean => {
    return offsets.some((offsetInfo) => offsetInfo.offset === offset)
}
