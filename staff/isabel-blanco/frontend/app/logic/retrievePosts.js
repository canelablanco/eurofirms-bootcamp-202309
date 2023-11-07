function retrievePosts(userId) {
    validateEmail(userId, 'user id')

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('user not found')

    const posts = db.getsPosts()

    posts.forEach(function (post) {
        const user = db.findUserById(post.author)

        post.author = user.name

        post.liked = post.likes.includes(userId)
    })

    return posts
}