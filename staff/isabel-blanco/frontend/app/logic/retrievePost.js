function retirevePosts(email) {
    validateEmail(email)

    //Search user by email

    var foundUser = find(users, function (user) {
        return user.email === email
    })

    // if user not found then error

    if (foundUser === undefind)
        throw new Error('user not found')

    return posts
}