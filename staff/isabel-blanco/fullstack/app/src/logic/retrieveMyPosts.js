import { validate } from './helpers'

import context from './context'

import errors, { SystemError } from './errors'

function retrieveMyPosts(callback) {
    validate.function(callback, 'callback')
    validate.jwt(context.jwt)

    const req = {
        method: 'GET',
        headers: {
            Autorization: `Bearer ${context.storage.token}`,
        },
    }

    fetch(`${import.meta.env.VITE_API_URL}/posts/mine`, req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => {
                        const constructor = errors[body.error]

                        callback(new constructor(body.message))
                    })
                    .catch(error => callback(new SystemError(error.message)))

                return
            }

            res.json()
                .then(posts => callback(null, posts))
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

export default retrieveMyPosts