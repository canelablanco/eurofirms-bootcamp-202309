import { validateText } from "../utils/validators"

function retrieveMyPosts(userId) {
    validateText(userId, 'user id')
    validateFunction(callback, 'callback')

    const req = {
        method: 'GET',
        headers: {
            Autorization: `Bearer ${userId}`,
        },
    }

    fetch('http://localhost:4000/posts/mine', req)
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

export default retrieveMyPosts