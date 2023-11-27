export default function analyzeArray(arr) {
    if(!Array.isArray(arr)) return 'Invalid input'

    if(arr.filter((e) => typeof e !== 'number').length > 0 ) return 'Invalid input'

    const average = arr.reduce((a, b) => a + b, 0) / arr.length;
    const min = arr.reduce((a, b) => Math.min(a, b))
    const max = arr.reduce((a, b) => Math.max(a, b))
    const length = arr.length
   
    console.log( {
        average,
        min,
        max,
        length
    })

    return {
        average,
        min,
        max,
        length
    }

   
}