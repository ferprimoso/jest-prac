import analyzeArray from "./analyzeArray"

test('Test array = [1, 2, 3, 4] ', () => {
    expect(analyzeArray([1,2,3,4])).toEqual(
        {
            average: 2.5,
            min: 1,
            max: 4,
            length: 4
        }
    )
})


test('Test another num array', () => {
    expect(analyzeArray([1,2,3,4, 7, 10, -2])).toEqual(
        {
            average: 3.5714285714285716,
            min: -2,
            max: 10,
            length: 7
        }
    )    
})

test('Test invalid input', () => {
    expect(analyzeArray('a')).toBe('Invalid input')   
})

test('Test invalid input inside array', () => {
    expect(analyzeArray(['a', 0, 2, []])).toBe('Invalid input')   
})

test('Test invalid input inside array', () => {
    expect(analyzeArray([[1, 2],[],{}])).toBe('Invalid input')   
})


