import React, { useState } from 'react';

const Login = () => {
    const[user, setUser] = useState({ username: '', password: ''})

    return (
        <form>
            <input type='text' placeholder='Username' />
            <input type='text' placeholder='Password' />
            <button>Submit</button>
        </form>
    )
}

export default Login