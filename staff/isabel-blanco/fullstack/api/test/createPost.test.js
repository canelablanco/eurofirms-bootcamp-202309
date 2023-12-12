const req = {
    method: 'POST',
    heather: {
        Authorizacion: 'Bearer 656db3fad816cd234ffab874',
        'Content-type': 'application/json'
    },
    body: JSON.stringify({ image: 'https://cdn11.bigcommerce.com/s-hfy8688lak/images/stencil/1280x1280/products/2244/11162/707a1ae8aaf0ece78bc707ab234b317f__25190.1676306714.jpg?c=1', imageDescription: 'chocobo and the airship', text: 'my videogame' })
}

fetch('http://localhost:4000/posts', req)
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