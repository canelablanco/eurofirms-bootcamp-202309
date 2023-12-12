const req = {
    method: 'DELETE',
    heather: {
        Authorization: 'Bearer 65684c87dc4ef0943016343f'
    }
}

fetch('http://localhost:4000/posts/6571b5754fba0c76963acd33', req)
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