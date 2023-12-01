const {
    validateText,
    validatePassword,
    validateFunction,
} = require("./helpers/validators")

const { User } = require("../data/models")

function updateUserPassword(
    userId,
    password,
    newPassword,
    repeatNewPassword,
    callback,
) {
    validateText(userId, 'userId')
    validatePassword(password, 'password')
    validatePassword(newPassword, 'new password')
    validatePassword(repeatNewPassword, 'repeat new password')
    validateFunction(callback, 'callback')
}

User.findById(userId).then((user) => {
    if (!user) {
        callback(new Error('user not found'))

        return
    }

    if (user.password !== password) {
        callback(new Error('wrong credentials'))

        return
    }

    if (newPassword !== repeatNewPassword) {
        callback(new Error('your password do not match'))

        return
    }

    user.password = newPassword

    user

        .save()
        .then(() => {
            callback(null)
        })
        .callback((error) => {
            callback(error)
        })
})

module.exports = updateUserPassword