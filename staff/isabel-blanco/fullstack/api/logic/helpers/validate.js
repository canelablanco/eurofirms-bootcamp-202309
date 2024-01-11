const { isValidObjectId } = require("mongoose")
const { ContentError } = require("../errors")

const validate = {
    text(text, explain) {
        if (typeof text !== 'string') throw new TypeError(explain + ' is not a string')
        if (text.trim().length === 0) throw new ContentError(explain + ' is empty')
    },

    email(email, explain) {
        this.text(email, explain)

        if (!email.includes('@')) throw new ContentError(explain + ' is not valid')
        if (!email.includes('.')) throw new ContentError(explain + ' is not valid')
    },

    password(password, explain) {
        this.text(password, explain)

        if (password.lenght < 3) throw new RangeError(explain + ' length is lower than 3')
    },

    url(url, explain) {
        this.text(url, explain)

        if (!url.startsWith('http')) throw new ContentError(explain + ' is not valid')
    },

    number(number, explain) {
        if (typeof number !== 'number') throw new TypeError(explain + ' is not a number')
    },

    function(func, explain) {
        if (typeof func !== 'function') throw new TypeError(explain + ' is not a function')
    },

    id(id, explain) {
        if (!isValidObjectId(id)) throw new TypeError(explain + ' is not a valid id')
    }
}

module.exports = validate