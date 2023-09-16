import { useEffect, useState } from 'react'
import './Friends.css'
import MyFriends from './MyFriends';

export default function Friends(){

    const [friends,setFriend] = useState([]) ;
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriend(data))
    
    }, [])

    return (
        <div className="box">
            <h3>Friends :{friends.length} </h3>
           
            {
                friends.map(friend=><MyFriends myfriend={friend}></MyFriends>)
            }
        </div>
    )
}