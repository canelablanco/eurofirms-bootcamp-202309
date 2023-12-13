import { useEffect, useState } from "react"

import retrieveUser from "../logic/retrieveUser"

import Button from "../components/Button"
import Link from "../components/Link"
import Container from "../components/Container"
import MyPosts from "../components/MyPosts"
import NewPost from "../components/NewPosts"
import AllPosts from "../components/AllPost"
import SavedPosts from "../components/SavedPosts"

import Logo from "../components/Logo"

function Home(props) {
    console.log('Home')

    const [view, setView] = useState(null)
    const [name, setName] = useState(null)
    const [timestamp, setTimestamp] = useState(null)

    useEffect(() => {
        console.log('Home useEffect')
        try {
            retrieveUser(window.sessionUserId, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }
                setName(user.name)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    function handleLogoutClick() {
        window.sessionUserId = null

        props.onLogout()
    }

    function handleNewPostClick() {
        setView('new-post')
    }

    function handleNewPostCancelClick() {
        setView(null)
    }

    function handleNewPostSubmit(event) {
        setView('saved')
        setTimestamp(Date.now())
    }

    function handleSavedClick(event) {
        event.preventDefault()

        setView('saved')
    }

    function handleHomeClick(event) {
        event.preventDefault()

        setView(null)
    }

    function handleMyPostsClick(event) {
        event.preventDefault()

        setView('my-posts')
    }

    return <Container>
        <header className="flex justify-between items-center md:min-w-[500px] lg:min-w-[768px]" aria-label="Header">
            <Link className="hidden lg:block" onClick={handleHomeClick}><Logo /></Link>

            <Button className="hidden lg:block" title="New post" aria-label="New post (+)" onClick={handleNewPostClick}>+</Button>

            <Link onClick={handleSavedClick}>Saved</Link>

            <Link onClick={handleMyPostsClick}>My posts</Link>

            <span aria-label="User name">{name}</span>

            <Button onClick={handleLogoutClick}>Logout</Button>
        </header>

        {view === 'new-post' ? <NewPost onNewPostSubmit={handleNewPostSubmit} onNewPostCancelClick={handleNewPostCancelClick} /> : null}

        {view === null || view === 'new-posts' ? <AllPosts timestamp={timestamp} /> : null}

        {view === 'saved' ? <SavedPosts /> : null}

        {view === 'my-post' ? <MyPosts /> : null}

        <div className="h-[2rem]"></div>

        <footer className="bg-white fixed bottom-0 w-full flex justify-center items-center h-[2rem] lg:hidden">
            <link onClick={handleHomeClick}><Logo /></link>
            <Button title="New post" aria-label="New post (+)" onClick={handleNewPostClick}>+</Button>
        </footer>

    </Container>
}

export default Home