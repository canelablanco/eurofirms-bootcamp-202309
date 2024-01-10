const mongoose = require('mongoose')

const { Schema, model, Types: { ObjectId } } = mongoose

const user = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        unique: true
    },

    saved: {
        type: [ObjectId],
        ref: 'Diet'
    }
})

const User = model('User', user)

module.exports = User