export default function capitalize(string) {
    if (typeof string !== 'string') return null
    if (string == '') return string

    return string[0].toUpperCase() + string.substring(1) 
}