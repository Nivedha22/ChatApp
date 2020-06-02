export default class Utility {
    static isValidField = (term) => {
        let length = term.trim().length
        return length > 0 ? true : false
    }
    static isEmailValid = (term) => {
        const expression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        let isValid = expression.test(String(term).toLowerCase())
        return isValid
    }
}