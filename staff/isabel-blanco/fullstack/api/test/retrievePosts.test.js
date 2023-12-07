const { error } = require("console")

const req = {
    method: 'GET',
    heaathers: {
        Authorizacion: 'Bearer 656db3fad816cd234ffab874',
    },
}

fetch('http://localhost:4000/posts', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        res.json()
            .then(posts => console.log(res.status, posts))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))