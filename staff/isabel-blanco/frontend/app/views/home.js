// home view

var homeView = document.getElementById('home-view');

homeView.style.display = 'none'

var logoutButton = homeView.querySelector('#logout-button')

logoutButton.onclick = function () {
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

var cancelNewPostButton = newPostForm.querySelector('#cancel-post-button')

cancelNewPostButton.onclick = function (event) {
    event.preventDefault()

    newPostForm.reset()

    newPostPanel.style.display = 'none'
}

// submit post form

postForm.onsubmit = function (event) {
    event.preventDefault()

    var imageInput = newPostForm.querySelector('#image-input')
    var textInput = newPostForm.querySelector('#text-input')

    var image = imageInput.value
    var text = textInput.value

    var post = {}

    post.author = loggedInEmail
    post.image = image
    post.text = text

    posts.push(post)

    newPostForm.reset()

    newPostPanel.style.display = 'none'

    renderPost()
}

function renderPost() {
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

        article.appendChild(span)
        article.appendChild(image)
        article.appendChild(paragraph)

        postsList.appendChild(article)
    }
}