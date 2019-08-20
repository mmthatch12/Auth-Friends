import React from 'react'
import { Form, Field, withFormik } from 'formik'
import axios from 'axios'


const FriendList = () => {
    return (
        <Form>
            <Field type='text' name='name' placeholder='Name' />
            <Field type='number' name='age' placeholder='Age' />
            <Field type='email' name='email' placeholder='Email' />
            <button type='submit'>Add Friend!</button>
        </Form>
    )
}

const FormikFriendList = withFormik({
    mapPropsToValues({ name, age, email }) {
        return {
            name: name || '',
            age: age || 0,
            email: email || '',
        }
    },

    handleSubmit(value, { resetForm, setStatus }) {
        axios.post('http://localhost:5000/api/friend')
            .then(res => {
                console.log('post request', res.data)
                setStatus(res.data)
                resetForm()
            })
            .catch(err => {
                console.log(err.response)
            })
    }
})(FriendList)

export default FormikFriendList