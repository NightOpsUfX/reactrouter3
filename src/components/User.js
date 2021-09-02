// export default function User ({user}) {
//
//     return (
//         <div className={'userItem contentItem'}>
//             <h3>{user.name}</h3>
//             <div>
//                 <p>User ID: {user.id}</p>
//                 <p>Username: {user.username}</p>
//                 <p>User phone: {user.phone}</p>
//                 <p>User email: {user.email}</p>
//                 <p>User company: {user.company.name}</p>
//             </div>
//         </div>
//     )
// }
//
//
//
//
//
//////////////////////////////////////////////////

import {Link} from "react-router-dom";

export default function User ({item, history}) {
    let ShowUserDetails = () => {
        history.push('/users/'+item.id)
    }
    return (
        <div>
            {
                // <h3>{item.name} - <Link to={{pathname: '/users/' + item.id, state: item}}>user details</Link></h3>
                // <h3>{item.name} - <Link to={{pathname: '/users/' + item.id}}>user info details</Link></h3>
                <h3>
                    <span>{item.name} </span>
                    <button onClick={ShowUserDetails}>
                        <span>Show User Details</span>
                    </button>
                </h3>

            }
        </div>
    )
}
