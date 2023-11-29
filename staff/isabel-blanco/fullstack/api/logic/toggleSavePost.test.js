const mongoose = require('mongoose')

const toggleSavePost = require('./toggleSavePost')

mongoose.connect('mongodb://127.0.0.1/test')
    .then(() => {
        try {
            toggleSavePost('65608715bab5d765008aa494', error => {
                if (error) {
                    console.error(error)
                }

                console.log('toggled save post')
            })
        } catch (error) {
            console.error(error)
        }
    })