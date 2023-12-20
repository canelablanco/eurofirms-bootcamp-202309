import validate from './validate'
import context from './context'

function deletePost(userId, callback) {
    validate.text(postId, 'post id')
    validate.funktion(callback, 'callback')
    validate.jwt(context.jwt)

    const req = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${context.storage.token}`,
        }
    }

    fetch(`http://localhost:4000/posts/${postId}`, req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback())
                    .catch(error => callback(error))

                return
            }

            callback(null)
        })
        .catch(error => callback(error))

}

export default deletePost