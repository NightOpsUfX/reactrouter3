export default function PostDetails (props) {
    console.log(props)
    let item = props.location.state.item
    return (
        <div>
           <h4>{item.title}</h4>
            <p>{item.body}</p>
        </div>
    );
}