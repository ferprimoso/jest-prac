import reverseString from "./reverseString";

test('hello should become olleh', () => {
    expect(reverseString('hello')).toBe('olleh')
})

test('Howdy! should become !ydwoH', () => {
    expect(reverseString('Howdy!')).toBe('!ydwoH')
})

test('non-string-type should return Invalid input ', () => {
    expect(reverseString(21313)).toBe('Invalid input')
})

test('Empty strings should return empty strings', () => {
    expect(reverseString('')).toBe('')
})

test('Three words string should become gnirts sdrow eerhT', () => {
    expect(reverseString('Three words string')).toBe('gnirts sdrow eerhT')
})