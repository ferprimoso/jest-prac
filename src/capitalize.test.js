import capitalize from "./capitalize";

test('Capitalize abcdefg first letter', () => {
    expect(capitalize('abcdefg')).toBe('Abcdefg')
});

test('Numbers instead of letters', () => {
    expect(capitalize('012156')).toBe('012156')
});

test('three word test', () => {
    expect(capitalize('three word test')).toBe('Three word test')
});

test('Empty string', () => {
    expect(capitalize('')).toBe('')
});

test('Not a string value', () => {
    expect(capitalize(9)).toBe(null)
});


