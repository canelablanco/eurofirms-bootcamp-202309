import { validateText } from "../utils/validators"
import db from "../data/managers"

function toggleLikePost(userId, postId) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')

    const req = {
        method: 'PATCH',
        headers: {
            Authorizacion: `Bearer ${userId}`
        }
    }

    fetch(`http://localhost:4000/posts/${postId}/likes`, req)
        .then(res => {
            if (res.ok) {
                req.json()
                    .then(body => callback(new Error(body.error)))
                    .catch(error => callback(error))

                return
            }

            callback(null)
        })
        .catch(error => callback(error))
}

export default toggleLikePost