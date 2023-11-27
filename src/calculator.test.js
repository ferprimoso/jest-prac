import calculator from "./calculator";

//add 

test('add(1,2) should return 3', () => {
    expect(calculator.add(1,2)).toBe(3)
})

test('add(100,5.5) should return 105.5', () => {
    expect(calculator.add(100,5.5)).toBe(105.5)
})

test('add(0,9) should return 9', () => {
    expect(calculator.add(0,9)).toBe(9)
})


test('add(0,-9) should return -9', () => {
    expect(calculator.add(0,-9)).toBe(-9)
})


test('add(non-number-type, non-number-type) should return null', () => {
    expect(calculator.add('string',[1,2,3])).toBe(null)
})

//subtract


test('subtract(1,2) should return -1', () => {
    expect(calculator.subtract(1,2)).toBe(-1)
})

test('subtract(100,5.5) should return 94.5', () => {
    expect(calculator.subtract(100,5.5)).toBe(94.5)
})

test('subtract(0,9) should return -9', () => {
    expect(calculator.subtract(0,9)).toBe(-9)
})


test('subtract(0,-9) should return 9', () => {
    expect(calculator.subtract(0,-9)).toBe(9)
})

test('subtract(non-number-type, non-number-type) should return null', () => {
    expect(calculator.subtract('string',[1,2,3])).toBe(null)
})


//divide

test('divide(1,2) should return 0.5', () => {
    expect(calculator.divide(1,2)).toBe(0.5)
})

test('divide(100,2) should return 50', () => {
    expect(calculator.divide(100,2)).toBe(50)
})

test('works with negative, divide(-50,2) should return -25', () => {
    expect(calculator.divide(-50, 2)).toBe(-25)
})

test('works with two negative, divide(-50,-2) should return 25', () => {
    expect(calculator.divide(-50, -2)).toBe(25)
})

test('works with 0 dividend, divide(0,5) should return 0', () => {
    expect(calculator.divide(0, 5)).toBe(0)
})


test('0 divisor should return null, divide(5, 0) should return null', () => {
    expect(calculator.divide(5, 0)).toBe(null)
})

test('divide(non-number-type, non-number-type) should return null', () => {
    expect(calculator.divide('string',[1,2,3])).toBe(null)
})

//multiply

test('multiply(1.5,2) should return 3', () => {
    expect(calculator.multiply(1.5,2)).toBe(3)
})

test('multiply(100,2) should return 200', () => {
    expect(calculator.multiply(100,2)).toBe(200)
})

test('works with negative, multiply(-50,2) should return -100', () => {
    expect(calculator.multiply(-50, 2)).toBe(-100)
})

test('works with two negative, multiply(-50,-2) should return 100', () => {
    expect(calculator.multiply(-50, -2)).toBe(100)
})

test('works with 0, multiply(0,5) should return 0', () => {
    expect(calculator.multiply(0, 5)).toBe(0)
})

test('works with 0, multiply(5, 0) should return 0', () => {
    expect(calculator.multiply(5, 0)).toBe(0)
})

test('multiply(non-number-type, non-number-type) should return null', () => {
    expect(calculator.multiply('string',[1,2,3])).toBe(null)
})