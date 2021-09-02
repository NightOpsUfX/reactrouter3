// import {useEffect, useState} from "react";
// import {getUsers} from "../services/services";
// import User from "./User";
//
//
// export default function Users () {
//
//     let [users, setUsers] = useState([]);
//
//     useEffect(() => {
//         getUsers().then(value => setUsers([...value]))
//     },[])
//
//     return(
//         <div className={'usersWrapper contentItemsWrapper'}>
//             {
//                 users.map(value => <User user={value} key={value.id}/>)
//             }
//         </div>
//     )
// }
//

import {useEffect, useState} from "react";
import {getPosts, getUsers} from "../services/services";
// import Post from "./Post";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import User from "./User";
// import PostDetails from "./PostDetails";
import UserDetails from "./UserDetails";
import UserInfo from "./UserInfo";

export default function Users (props) {
    let {match: {url}, history} = props;
    let [users, setUsers] = useState([]);

    useEffect(() => {
        async function usersData(props) {
            let usersList = await getUsers();
            setUsers([...usersList])
        }
        usersData()
    },[])

    return(
        <div>
            {/*<Route path={'/users/:id'} render={(props) => {*/}
            {/*    return <UserDetails {...props}/>*/}
            {/*}}/>*/}
            <Route path={'/users/:id'} render={(props) => {
                return <UserInfo {...props}/>
            }}/>
            {
                users.map(value => <User history={history} item={value} key={value.id}/>)
            }
        </div>

    )

}