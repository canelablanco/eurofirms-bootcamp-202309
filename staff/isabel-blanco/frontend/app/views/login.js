// login view

var loginView = document.getElementById('login-view')

loginView.style.display = ''

// navigation to register

var registerLink = loginView.querySelector('#register-link')

registerLink.onclick = function (event) {
    event.preventDefault();

    loginView.style.display = 'none'
    registerView.style.display = ''
};

// submit login

var loginForm = loginView.querySelector('#login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email-input')
    var passwordInput = loginForm.querySelector('#password-input')

    var email = emailInput.value
    var password = passwordInput.value

    // search user by email
    var foundUser = null

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user
            break
        }
    }

    // if user not found then error
    if (foundUser === null) {
        alert('Credenciales incorrectas');
        return;
    }

    if (foundUser.password !== password) {
        alert('Credenciales incorrectas');
        return;
    }

    // Limpiar los campos de entrada
    emailInput.value = '';
    passwordInput.value = '';

    loggedInEmail = foundUser.email

    loginView.style.display = 'none';

    var userNameSpan = homeView.querySelector('#user-name-span')
    userNameSpan.innerText = foundUser.name

    var postsList = homeView.querySelector('#posts-list')

    for (var i = posts.length - 1; i >= 0; i--) {
        var post = posts[i]

        var article = document.createElement('article')

        var span = document.createElement('span')
        span.innerText = post.author

        var image = document.createElement('img')
        image.setAttribute('class', 'post-image')
        image.src = post.image

        var paragraph = document.createElement('p')
        paragraph.innertText = post.text

        var alt = document.createElement('alt')
        alt.innertText = post.text

        article.appendChild(span)
        article.appendChild(image)
        article.appendChild(paragraph)
        article.appendChild(alt)

        postsList.appendChild(article)
    }

    homeView.style.display = ''
}