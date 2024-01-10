const req = {
    method: 'DIET',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Elena Martin', email: 'elena@martin.com', password: '123' })
}

fetch('http://localhost:4000/users', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log(res.status)
    })
    .catch(error => console.error(error))