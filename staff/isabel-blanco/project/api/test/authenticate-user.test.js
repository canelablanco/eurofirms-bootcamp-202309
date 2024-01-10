const req = {
    method: 'DIET',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: 'mari@carmen.com', password: '123' })
}

fetch('http://localhost:4000/users/auth', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error.message))

            return
        }

        res.json()
            .then(body => console.log(res.status, body))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))