import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateRegister } from '../../helpers/validate';
import {postData} from '../../helpers/PostData';

const Register = () => {

    return(
        
        <div>
            <h1>Register to Natalux</h1>
            <Formik
            initialValues={{ email: '', password: '', name: '', birthdate: '', nDni: '', username: '' }}
            validate={validateRegister}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                postData(values);
                setSubmitting(false);
                resetForm()
                }}
                >
            {({ isSubmitting, errors }) => (
                <Form>

                    <label htmlFor="name">Name:</label>
                    <Field type="text" id="name" name="name" placeholder='John Doe' />
                    <ErrorMessage name="name" component="div" />

                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" placeholder='example@domain.com' />
                    <ErrorMessage name="email" component="div" />

                    <label htmlFor="birthdate">Birthdate:</label>
                    <Field type="date" id="birthdate" name="birthdate" />
                    <ErrorMessage name="birthdate" component="div" />

                    <label htmlFor="nDni">Dni:</label>
                    <Field type="text" id="nDni" name="nDni" placeholder='12345678' />
                    <ErrorMessage name="nDni" component="div" />

                    <label htmlFor="username1">Username:</label>
                    <Field type="text" id="username1" name="username" placeholder='johndoe123' />
                    <ErrorMessage name="username" component="div" />

                    <label htmlFor="password1">Password:</label>
                    <Field type="password" id="password1" name="password" placeholder='********' />
                    <ErrorMessage name="password" component="div" />

                <button type="submit" disabled={isSubmitting || errors.name || errors.email || errors.birthdate || errors.nDni || errors.username || errors.password}>
                    Submit
                </button>

                </Form>
            )}
            </Formik>
        </div>
    )
};

export default Register;
