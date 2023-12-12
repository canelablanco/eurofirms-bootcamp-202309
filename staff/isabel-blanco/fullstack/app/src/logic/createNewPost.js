import { validateText, validateUrl } from "../utils/validators"

function createNewPost(userId, image, imageDescription, text) {
    validateText(userId, 'user id')
    validateUrl(image, 'image url')
    validateText(imageDescription, 'image description')
    validateText(text, 'text')

    const req = {
        method: 'POST',
        headers: {
            Authorizacion: `Bearer ${userId}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, imageDescription, text })
    }

    fetch('http://localhost:4000/posts', req)
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

export default createNewPost