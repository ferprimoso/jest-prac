export default function reverseString(string) {
    if (typeof string !== 'string') return 'Invalid input'

    return string.split('').reverse().join('')
}