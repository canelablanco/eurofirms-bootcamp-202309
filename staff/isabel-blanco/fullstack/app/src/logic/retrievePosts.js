import { validateText, validateFunction } from "../utils/validators"

function retrievePosts(userId) {
    validateText(userId, 'user id')
    validateFunction(callback, 'callback')

    const req = {
        method: 'GET',
        headers: {
            Authorizacion: `Bearer ${userId}`
        },
    }

    fetch('http://localhost:4000/posts', req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.error)))
                    .catch(error => callback(error))

                return
            }

            res.json()
                .then(posts => callback(null, posts))
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
}

export default retrievePosts