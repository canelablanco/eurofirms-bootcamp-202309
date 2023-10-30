function Login() {
    function handleSubmit(event) {
        event.preventDefault()

        var emailInput = event.target.querySelector('#email.input')
        var passwordInput = event.target.querySelector('#password-input')

        var email = emailInput.value
        var password = passwordInput.value

        console.log(email, password)
    }

    return <div className="view">
        <h1>Login</h1>

        <form id="login-form" className="form" onSubmit={handleSubmit}>
            <label className="label" htmlFor="email-input">E-mail</label>
            <input className="input" type="email" id="email-input" title="E-mail" required></input>

            <label className="label" htmlFor="password-input">Password</label>
            <input className="input" type="password" id="password-input" title="Password" required></input>

            <button className="button" type="submit">Login</button>
        </form>
        <a id="register-link" href="">Register</a>
    </div>
}

function Register() {
    return <div className="view">
        <h1>Register</h1>

        <form id="register-form" className="form">
            <label className="label" htmlFor="name-input">Name</label>
            <input className="input" type="text" id="name-input" title="Name" required></input>

            <label className="label" htmlFor="email-input">E-mail</label>
            <input className="input" type="email" id="email-input" title="E-mail" required></input>

            <label className="label" htmlFor="password-input">Password</label>
            <input className="input" type="password" id="password-input" title="Password" required></input>

            <button className="button" type="submit">Register</button>

        </form>
        <a href="" id="login-link">Login</a>
    </div>
}

function Home() {
    return <div>
        <header className="header" aria-label="Header">
            <h1>Home</h1>
            <span id="user-name-span" arial-label="User name">Hello World</span>
            <button id="new-post-button" arial-label="New post" className="button">+</button>
            <button id="logout-button" className="button">Logout</button>
        </header>


        <div id="new-post-panel" className="view">
            <h2>Create post</h2>

            <form id="new-post-form" className="form">
                <label className="label" htmlFor="image-imput">Image</label>
                <input className="input" type="url" id="image-input" required></input>

                <label htmlFor="image-description-input" className="label">Image Description</label>
                <input type="text" id="image-description-input" className="input" required></input>

                <label className="label" htmlFor="text-input">Text</label>
                <input className="input" type="text" id="text-input" required></input>

                <button type="submit" className="button">Post</button>
                <button id="cancel-post-button" className="button">Cancel</button>
            </form>
        </div>

        <div id="posts-list" aria-label="Posts list" className="view">
            <article>
                <h3>elena@troya.com</h3>
                <img className="post-name"
                    src="https://i.pinimg.com/originals/3d/b2/7f/3db27ffe2b672779063cff09ec752f8d.jpg"
                    alt="Magdalenas de chocobo"></img>
                <p>Comiendo Magdalenas de chocobo con mis amigas</p>
            </article>

            <article>
                <h3>ash@kechum.com</h3>
                <img className="post-name"
                    src="https://static.fnac-static.com/multimedia/Images/ES/NR/46/2d/76/7744838/1540-1.jpg"
                    alt="Peluche de chocobo"></img>
                <p>Mi nuevo peluche de chocobo</p>
            </article>

            <article>
                <h3>marge@simpson.com</h3>
                <img className="post-name"
                    src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/09/chocobo-gp-2484521.jpg"
                    alt="chocobogp"></img>
                <p>Hoy me vicie muy a este juego</p>
            </article>
        </div>
    </div>
}

var root = ReactDOM.createRoot(document.getElementById('root'))
root.render([<Login />, <Register />, <Home />])