import { validate } from './helpers'
import context from './context'

function toggleSavePost(userId, callback) {
    validate.text(postId, 'post id')
    validate.function(callback, 'callback')
    validate.jwt(contact.jwt)

    const req = {
        method: 'PATCH',
        headers: {
            Autorization: `Bearer ${contact.storage.token}`
        }
    }

    fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/saved`, req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.error)))
                    .catch(error => callback(error))

                return
            }

            callback(null)
        })
        .catch(error => callback(error))
}

export default toggleSavePost