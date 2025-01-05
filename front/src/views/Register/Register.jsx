import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateRegister } from '../../helpers/validate';
import { postDataRegister } from '../../helpers/PostData';
import style from './Register.module.css';

const Register = () => {
    return (
        <div className={style.registerContainer}>
            <div className={style.formWrapper}>
                <h1>Register to Natalux</h1>
                <Formik
                    initialValues={{ email: '', password: '', name: '', birthdate: '', nDni: '', username: '' }}
                    validate={validateRegister}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        postDataRegister(values);
                        setSubmitting(false);
                        resetForm();
                    }}
                >
                    {({ isSubmitting, errors }) => (
                        <Form>
                            <div className={style.formField}>
                                <label htmlFor="name">Name:</label>
                                <Field type="text" id="name" name="name" placeholder="John Doe" />
                                <ErrorMessage name="name" component="div" className={style.errorMessage} />
                            </div>

                            <div className={style.formField}>
                                <label htmlFor="email">Email:</label>
                                <Field type="email" id="email" name="email" placeholder="example@domain.com" />
                                <ErrorMessage name="email" component="div" className={style.errorMessage} />
                            </div>

                            <div className={style.formField}>
                                <label htmlFor="birthdate">Birthdate:</label>
                                <Field type="date" id="birthdate" name="birthdate" />
                                <ErrorMessage name="birthdate" component="div" className={style.errorMessage} />
                            </div>

                            <div className={style.formField}>
                                <label htmlFor="nDni">Dni:</label>
                                <Field type="text" id="nDni" name="nDni" placeholder="12345678" />
                                <ErrorMessage name="nDni" component="div" className={style.errorMessage} />
                            </div>

                            <div className={style.formField}>
                                <label htmlFor="username1">Username:</label>
                                <Field type="text" id="username1" name="username" placeholder="johndoe123" />
                                <ErrorMessage name="username" component="div" className={style.errorMessage} />
                            </div>

                            <div className={style.formField}>
                                <label htmlFor="password1">Password:</label>
                                <Field type="password" id="password1" name="password" placeholder="********" />
                                <ErrorMessage name="password" component="div" className={style.errorMessage} />
                            </div>

                            <button
                                type="submit"
                                disabled={
                                    isSubmitting ||
                                    errors.name ||
                                    errors.email ||
                                    errors.birthdate ||
                                    errors.nDni ||
                                    errors.username ||
                                    errors.password
                                }
                                className={style.submitButton}
                            >
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Register;
