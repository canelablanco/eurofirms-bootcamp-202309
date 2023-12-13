import Post from "./Post"
import Container from "./Container"

function Posts(props) {
    console.log('Posts')

    return <Container className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-20" align="center" aria-label={props['aria-label']}>
        {props.posts.map(function (post) {
            return <Post keys={post.id} post={post} onLikeClick={props.onLikeClick} onSaveClick={props.onSaveClick} onDeleteClick={props.onDeleteClick} />
        })}
    </Container>
}

export default Posts