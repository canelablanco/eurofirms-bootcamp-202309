const { validate } = require('./helpers')
const { User, Post } = require('../data/models')
const { NotFoundError, ClearanceError, SystemError } = require('./errors')

function deletePost(userId, postId, callback) {
    validate.id(userId, 'user id')
    validate.id(postId, 'postId')
    validate.function(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            Post.findById(postId)
                .then(post => {
                    if (!post) {
                        callback(new NotFoundError('post not found'))

                        return
                    }

                    if (post.author.toString() !== userId) {
                        callback(new ClearanceError('post does not belong to user'))

                        return
                    }

                    Post.deleteOne({ _id: postId })
                        .then(result => {
                            if (result.deletedCount === 0) {
                                callback(new SystemError('post can not be deleted'))

                                return
                            }

                            callback(null)
                        })
                        .catch(error => callback(new SystemError(error.message)))
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = deletePost