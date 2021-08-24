export default function Post ({post}) {

    return (
        <div className={'postItem contentItem'}>
            <h3>{post.title}</h3>
            <div>
                <p>Post ID:{post.id}</p>
                <p>User ID {post.userId}</p>
                <p>Post text: {post.body}</p>
            </div>
            <br/>
        </div>
    )
}


