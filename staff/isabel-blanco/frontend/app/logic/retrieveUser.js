function retrieveUser(userId) {
    validateEmail(userId)

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('user not found')
    return user
}