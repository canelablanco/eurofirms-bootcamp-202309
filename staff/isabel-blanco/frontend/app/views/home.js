// home view

homeView = document.getElementById('home-view');

homeView.style.display = 'none'

logoutButton = homeView.querySelector('#logout-button')

logoutButton.onclick = function () {
    homeView.style.display = 'none'

    var postList = homeView.querySelector('#posts-list')
    postList.innerHTML = ''

    loginView.style.display = ''
}

// post panel
newPostPanel = homeView.querySelector('#new-post-panel')

newPostPanel.style.display = 'none'

// post form

newPostForm = newPostPanel.querySelector('#new-post-form')

//post button

newPostButton = homeView.querySelector('#new-post-button')

newPostButton.onclick = function () {
    newPostPanel.style.display = ''
}

//cancel post button

cancelNewPostButton = newPostForm.querySelector('#cancel-post-button')

cancelNewPostButton.onclick = function (event) {
    event.preventDefault()

    newPostForm.reset()

    newPostPanel.style.display = 'none'
}

// submit post form

newPostForm.onsubmit = function (event) {
    event.preventDefault()

    var imageInput = newPostForm.querySelector('#image-input')
    var imageDescriptionInput = newPostForm.querySelector('#image-desciption-input')
    var textInput = newPostForm.querySelector('#text-input')

    var image = imageInput.value
    var imageDescriptionInput = imageDescriptionInput.value
    var text = textInput.value

    try {

        createNewPost(loggedInEmail, image, imageDescription, text)


        newPostForm.reset()

        newPostPanel.style.display = 'none'

        renderPosts()
    } catch (error) {
        alert(error.message)
    }
}

function renderPosts() {
    try {
        var posts = retirevePosts(loggedInEmail)

        var postsList = homeView.querySelector('#posts-list')

        postsList.innerHTML = ''

        for (var i = posts.length - 1; i >= 0; i--) {
            var post = posts[i]

            var article = document.createElement('article')
            article.setAttribute('aria-label', 'post')

            var h3 = document.createElement('h3')
            span.innerText = post.author
            h3.innerText = post.author
            h3.setAttribute('arial-label', 'author')

            var image = document.createElement('img')
            image.setAttribute('class', 'post-image')
            image.src = post.image
            image.alt = post.imageDescription

            var paragraph = document.createElement('p')
            paragraph.innerText = post.text

            article.appendChild(span)
            article.appendChild(image)
            article.appendChild(paragraph)

            postsList.appendChild(article)
        }
    } catch (error) {
        alert(error.message)
    }
}