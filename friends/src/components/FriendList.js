import React from 'react'
import { Form, Field, withFormik } from 'formik'


const FriendList = () => {
    return (
        <Form>
            <Field type='text' name='name' placeholder='Name' />
            <Field type='text' name='age' placeholder='Age' />
            <Field type='email' name='email' placeholder='Email' />
            
        </Form>
    )
}

export default FriendList