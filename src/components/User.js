export default function User ({user}) {

    return (
        <div className={'userItem contentItem'}>
            <h3>{user.name}</h3>
            <div>
                <p>User ID: {user.id}</p>
                <p>Username: {user.username}</p>
                <p>User phone: {user.phone}</p>
                <p>User email: {user.email}</p>
                <p>User company: {user.company.name}</p>
            </div>
        </div>
    )
}





