const mongoose = require('mongoose')

const retrieveUser = require('./retrieveUser')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrieveUser('65608715bab5d765008aa494')
                .then(user => console.log('user retrieved', user))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }
    })