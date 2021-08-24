import {useEffect, useState} from "react";
import {getUsers} from "../services/services";
import User from "./User";


export default function Users () {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    },[])

    return(
        <div className={'usersWrapper contentItemsWrapper'}>
            {
                users.map(value => <User user={value} key={value.id}/>)
            }
        </div>
    )
}

