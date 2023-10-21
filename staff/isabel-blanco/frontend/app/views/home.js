// home view

// Obtener el elemento HTML con el id 'home-view'
var homeView = document.getElementById('home-view');

// Ocultar la vista de inicio
homeView.style.display = 'none'

// Obtener el botón de cierre de sesión dentro de la vista de inicio
var logoutButton = homeView.querySelector('#logout-button')

// Agregar un controlador de eventos al hacer clic en el botón de cierre de sesión
logoutButton.onclick = function () {
    // Ocultar la vista de inicio y mostrar la vista de inicio de sesión
    homeView.style.display = 'none'

    var postList = homeView.querySelector('#posts-list')
    postList.innerHTML = ''

    loginView.style.display = ''
}

// post panel
var postPanel = homeView.querySelector('#post-panel')

postPanel.style.display = 'none'

// post form

var postForm = postPanel.querySelector('#post-form')

//post button

var postButton = homeView.querySelector('#post-button')

postButton.onclick = function () {
    postPanel.style.display = ''
}

//cancel post button

var cancelPostButton = postForm.querySelector('#cancel-post-button')

cancelPostButton.onclick = function (event) {
    event.preventDefault()

    postForm.reset()

    postPanel.style.display = 'none'
}

// submit post form

postForm.onsubmit = function (event) {
    event.preventDefault()

    var imageInput = postForm.querySelector('#image-input')
    var textInput = postForm.querySelector('#text-input')

    var image = imageInput.value
    var text = textInput.value

    var post = {}

    post.author = loggedInEmail
    post.image = image
    post.text = text

    posts.push(post)

    postForm.reset()

    postPanel.style.display = 'none'

    var postsList = homeView.querySelector('#posts-list')

    postsList.innerHTML = ''

    for (var i = post.length - 1; i >= 0; i--) {
        var post = posts[i]

        var article = document.createElement('article')

        var span = document.createElement('span')
        span.innerText = post.author

        var image = document.createElement('img')
        image.setAttributte('class', 'post-image')
        image.src = post.image

        var paragraph = document.createElement('p')
        paragraph.innerText = post.text

        var alt = document.createElement('alt')
        alt.innertText = post.text

        article.appendChild(span)
        article.appendChild(image)
        article.appendChild(paragraph)
        article.appendChild(alt)
    }
}