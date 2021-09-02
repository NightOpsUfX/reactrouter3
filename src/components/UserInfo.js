import {useHistory} from "react-router";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUser} from "../services/services";

export default function UserInfo ({history, match:{params:{id}}}) {
    // let history = useHistory();
    // let userId = useParams('id')
    let [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        getUser(id).then(value => setUserInfo({...value}))
    },[id])

    return (
        <div>
            {
                JSON.stringify(userInfo)
            }
        </div>
    )
}