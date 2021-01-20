# UTC offsets

> UTC offsets utility library

## Install

```
$ npm install utc-offsets
```

## Usage

```js
import {
    getOffsets,
    isValidOffset,
    offsetFromMinutes,
    minutesFromOffset,
} from 'utc-offsets'

console.log(getOffsets()) // [{ offset: '+14:00', minutes: 840 }, ...]

console.log(isValidOffset('+00:00')) // true
console.log(isValidOffset('+00:30')) // false

console.log(offsetFromMinutes(840)) // '+14:00'

console.log(minutesFromOffset('-09:30')) // -570
```

## API

### getOffsets()

Returns a `UTCOffsetInfo[]`.
> `UTCOffsetInfo = { offset: string, minutes: number }`

### isValidOffset(offset: string)

Returns `true` if `offset` is valid offset.

### offsetFromMinutes(minutes: number)

Returns offset or `undefined`.

### minutesFromOffset(offset: string)

Returns offset in minutes or `undefined` if `offset` is invalid.

## License
This library is released under the [MIT License](http://opensource.org/licenses/MIT).
