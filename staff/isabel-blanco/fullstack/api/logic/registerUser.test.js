const mongoose = require('mongoose')

const registerUser = require('./registerUser')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            registerUser('Pikachu Yellow', 'pikachu@yellow.com', '123')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })