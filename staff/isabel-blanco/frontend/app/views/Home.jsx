function Home(props) {
    const viewState = React.useState(null)
    const view = viewState[0]
    const setView = viewState[1]

    let name = null

    try {
        const user = retrieveUser(loggedInEmail)

        name = user.name
    } catch (error) {
        alert(error.message)
    }

    let posts = null

    try {
        posts = retrievePosts(loggedInEmail)
    } catch (error) {
        alert(error.message)
    }

    function handleLogoutClick() {
        loggedInEmail = null

        props.onLogout()
    }

    function handleNewPostClick() {
        setView('new-post')
    }

    function handleNewPostCancelClick() {
        setView(null)
    }

    return <div>
        <header className="header" aria-label="Header">
            <h1>Home</h1>
            <span arial-label="User name">{name}</span>
            <button arial-label="New post" className="button" onClick={handleNewPostClick}>+</button>
            <button className="button" onClick={handleLogoutClick}>Logout</button>
        </header>


        {view === 'new-post' ? <div className="view">
            <h2>Create post</h2>

            <form id="new-post-form" className="form">
                <label className="label" htmlFor="image-imput">Image</label>
                <input className="input" type="url" id="image-input" required />

                <label htmlFor="image-description-input" className="label">Image Description</label>
                <input type="text" id="image-description-input" className="input" required />

                <label className="label" htmlFor="text-input">Text</label>
                <input className="input" type="text" id="text-input" required />

                <button type="submit" className="button">Post</button>
                <button className="button" onClick={handleNewPostCancelClick}>Cancel</button>
            </form>
        </div> : null}

        {posts !== null ? <div id="post-list" aria-label="Posts list" className="view">
            {posts.map(function (post, index) {
                const liked = post.likes.includes(loggedInEmail)

                return <article key={index}>
                    <h3>{post.author}</h3>
                    <img className="post-image"
                        src={post.image}
                        alt={post.imageDescription} />

                    <p>{post.text}</p>
                    <button>{(liked ? '💕' : '🩶') + ' ' + post.likes.lenght + ' likes'}</button>
                </article>
            })}
        </div> : null}
    </div>
}