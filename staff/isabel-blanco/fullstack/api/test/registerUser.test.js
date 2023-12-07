const req = {
    method: 'POST',
    headers: {
        'Content-Type': 'aplication/json'
    },
    body: JSON.stringify({ name: 'Queso Blando', email: 'queso@blando', password: '123' })
}

fetch('http://localhost:4000/users', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log('user registered')
    })
    .catch(error => console.error(error))