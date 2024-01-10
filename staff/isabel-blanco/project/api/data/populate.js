const mongoose = require('mongoose')
const { User, Post } = require('./models')

const { Types: { ObjectId } } = mongoose

mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => {
    const isabel = new User({ name: 'Isabel Blanco', email: 'isabel@blanco.com', password: '123' })
    isabel.save().then(() => console.log('isabel saved'))

})