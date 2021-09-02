// export default function Post ({post}) {
//
//     return (
//         <div className={'postItem contentItem'}>
//             <h3>{post.title}</h3>
//             <div>
//                 <p>Post ID:{post.id}</p>
//                 <p>User ID {post.userId}</p>
//                 <p>Post text: {post.body}</p>
//             </div>
//             <br/>
//         </div>
//     )
// }
//
//

/////////////////////////////
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Post (item) {


    return(
        <div>

            <h3>{item.item.title} - <Link to={{pathname: '/posts/' + item.item.id, state: item}}>post details</Link></h3>
        </div>
    )
}
