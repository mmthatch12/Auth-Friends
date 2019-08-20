import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const FriendData = () => {
    const[friendList, setFriendList] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friend')
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response))

    }, [])

    return (
        <h1>Friend data</h1>
    )



}

export default FriendData

// const getData = () => {
//     axiosWithAuth().get('http://localhost:5000/api/friend')
//         .then(res => {
            
//         })
// }