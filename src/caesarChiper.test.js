import caesarChiper from "./caesarChiper";

test('abcde with -3 shift should be xyzab', () => {
    expect(caesarChiper('abcde', -3)).toBe('xyzab')
})

test('stuvw with 4 shift should be wxyza', () => {
    expect(caesarChiper('stuvw', 4)).toBe('wxyza')
})

test('works with uppercase or lowercase', () => {
    expect(caesarChiper('ZxdCvd', -5)).toBe('UsyXqy')
})

test('return Invalid input if string is not-type string', () => {
    expect(caesarChiper(32131, -5)).toBe('Invalid input')
})

test('return Invalid input if shift is not-type number', () => {
    expect(caesarChiper('asda', 'a')).toBe('Invalid input')
})
