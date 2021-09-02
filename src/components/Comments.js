// import {useState, useEffect} from "react";
// import {getComments} from "../services/services";
// import Comment from "./Comment";
//
// export default function Comments () {
//
//     let [comments, setComments] = useState([])
//
//     useEffect(() => {
//         getComments().then(value => setComments([...value]))
//     }, [])
//
//     return (
//         <div className={'commentsWrapper contentItemsWrapper'}>
//             {
//                 comments.map(value => <Comment comment={value} key={value.id}/>)
//             }
//         </div>
//     )
// }