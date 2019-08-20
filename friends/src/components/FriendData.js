import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const FriendData = () => {
    const[friendList, setFriendList] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {console.log(res.data)
            const theInfo = res.data
            setFriendList(theInfo)
            })
        .catch(err => console.log(err.response))

    }, [])

    return (
        friendList.map(friend => {
            return (
                <div key={friend.id}>
                    <h2>{friend.name}</h2>
                    <h2>{friend.age}</h2>
                    <h2>{friend.email}</h2>
                </div>
            
            )
        })
    )



}

export default FriendData

// const getData = () => {
//     axiosWithAuth().get('http://localhost:5000/api/friend')
//         .then(res => {
            
//         })
// }