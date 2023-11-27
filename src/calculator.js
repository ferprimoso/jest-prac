const add = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number' ) return null

    return x + y
}

const subtract = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number' ) return null

    return x - y
}


const divide = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number' || y == 0) return null

    return x / y
}


const multiply = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') return null

    return x * y
}




const calculator = {
    add,
    subtract,
    divide,
    multiply
}

export default calculator 
