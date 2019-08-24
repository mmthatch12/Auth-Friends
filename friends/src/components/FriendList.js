import React from 'react'
import { Form, Field, withFormik } from 'formik'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import FriendData from './FriendData'


const FriendList = () => {

    return (
        <div>
            <Form>
                <Field type='text' name='name' placeholder='Name' />
                <Field type='number' name='age' placeholder='Age' />
                <Field type='email' name='email' placeholder='Email' />
                <button type='submit'>Add Friend!</button>
            </Form>

            <FriendData />
        </div>
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

    handleSubmit(values, { resetForm, setStatus }) {
        axiosWithAuth().post('http://localhost:5000/api/friends', values)
            .then(res => {
                console.log('post request', res.data)
                setStatus(res.data)
                resetForm()
            })
            .catch(err => {
                console.log(err.response)
            })
    },
})(FriendList)

export default FormikFriendList