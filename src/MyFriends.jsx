export default function MyFriends({myfriend}){
    const {name,email} = myfriend ;
    return(
        <div>
            <h5>Name :{name} </h5>
            <p>Email :{email} </p>
        </div>
    )
}