import { validateText, validateFunction } from "../utils/validators"

function deletePost(userId, postId) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')
    validateFunction(callback, 'callback')

    const req = {
        method: 'DELETE',
        headers: {
            Authorización: `Bearer ${userId}`
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