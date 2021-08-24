import {useEffect, useState} from "react";
import {getPosts} from "../services/services";
import Post from "./Post";

export default function Posts () {

    let [posts, setPosts] = useState([])


    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])

    return (
        <div className={'postsWrapper contentItemsWrapper'}>
            {
                posts.map(value => <Post post={value} key={value.id}/>)
            }
        </div>
    )
}