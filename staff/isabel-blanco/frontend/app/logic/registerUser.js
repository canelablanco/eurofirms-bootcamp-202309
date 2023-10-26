function registerUser(name, email, password) {
    validateText(name, 'name')
    validateEmail(email)
    validatePassword(password)

    //search user by email

    const foundUser = null

    for (let i = 0; i < users.length; i++) {
        const user = users[i]

        if (user.email === email) {
            foundUser = user

            break
        }
    }

    //if user exists (it was found) the error

    if (foundUser !== null) {
        throw new Error('User alredy exists')
    }

    let user = {}
    user.name = name
    user.email = email
    user.password = password

    users.push(user)

}