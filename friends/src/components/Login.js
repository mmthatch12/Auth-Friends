import React, { useState } from 'react';
import axios from 'axios'

const Login = () => {
    const[user, setUser] = useState({ username: '', password: ''})

    const handleChange = e => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    const loginSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', user)
            .then(res => {
                console.log(res.data)
            })
    }

    return (
        <div>
            <form >
                <input type='text' name='username' value={user.username} placeholder='Username' onChange={handleChange} />
                <input type='text' name='password' value={user.password} placeholder='Password' onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login