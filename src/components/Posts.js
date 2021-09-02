// import {useEffect, useState} from "react";
// import {getPosts} from "../services/services";
// import Post from "./Post";
//
// export default function Posts () {
//
//     let [posts, setPosts] = useState([])
//
//
//     useEffect(() => {
//         getPosts().then(value => setPosts([...value]))
//     }, [])
//
//     return (
//         <div className={'postsWrapper contentItemsWrapper'}>
//             {
//                 posts.map(value => <Post post={value} key={value.id}/>)
//             }
//         </div>
//     )
// }

//////////////////////////////////////////

import {useEffect, useState} from "react";
import {getPosts} from "../services/services";
import Post from "./Post";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PostDetails from "./PostDetails";

export  default function Posts (props) {
    // let {match:{url}} = props;
    let [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            let postsList = await getPosts();
            setPosts([...postsList])
        }
        fetchData();
    }, [])

    return (
        <div>
            {/*<Route path={`${url}/:id`} render={() =>{*/}
            <Route path={'/posts/:id'} render={(props) =>{
                return <PostDetails {...props}/>
            }}/>
            {
                posts.map(value => <Post item={value} key={value.id}/>)
            }
        </div>
    )
}