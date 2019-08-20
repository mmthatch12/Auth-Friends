import React from 'react'
import { Form, Field, withFormik } from 'formik'
import axios from 'axios'


const FriendList = () => {
    return (
        <Form>
            <Field type='text' name='name' placeholder='Name' />
            <Field type='number' name='age' placeholder='Age' />
            <Field type='email' name='email' placeholder='Email' />
        </Form>
    )
}

const FormicFriendList = withFormik({
    mapPropsToValues({ name, age, email }) {
        return {
            name: name || '',
            age: age || 0,
            email: email || '',
        }
    },

    handleSubmit(value, { resetForm, setStatus }) {
        axios.post('http://localhost:5000/api/friend')
    }
})

export default FriendList