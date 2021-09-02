export default function UserDetails (props) {
    console.log(props)
    let user = props.location.state

    return(
        <div>
            <h4>{user.name}</h4>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>{user.email}</p>
        </div>
    )
}