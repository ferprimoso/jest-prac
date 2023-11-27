export default function caesarChiper(string, shift) {
    if(typeof string !== 'string' || typeof shift !== 'number') return 'Invalid input'

    let result = ''

    for (let i = 0; i < string.length; i++) {

        if (string[i] !== string[i].toLowerCase()) {
            if(string[i].charCodeAt() + shift < 65){
                result += String.fromCharCode(string[i].charCodeAt() + shift + 26)
            } 
            else if(string[i].charCodeAt() + shift > 90) {
                result += String.fromCharCode(string[i].charCodeAt() + shift - 26)
            } 
            else {
                result += String.fromCharCode(string[i].charCodeAt() + shift)
            }

        } else {
            if(string[i].charCodeAt() + shift < 97){
                result += String.fromCharCode(string[i].charCodeAt() + shift + 26)
            } 
            else if(string[i].charCodeAt() + shift > 122) {
                result += String.fromCharCode(string[i].charCodeAt() + shift - 26)
            } 
            else {
                result += String.fromCharCode(string[i].charCodeAt() + shift)
            }
        }

    }

    return result

}