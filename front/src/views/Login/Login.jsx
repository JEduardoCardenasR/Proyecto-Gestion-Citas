import React, { useEffect, useState } from 'react';
import { validateLogin } from '../../helpers/validate';
import { postDataLogin } from '../../helpers/PostData';

const Login = () => {
    const initialValues = {
        username: '',
        password: '',
    }

    const [formData, setFormData] = useState(initialValues)
    const [errors, setErrors] = useState(initialValues)
    
    const handleChange  = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    useEffect(() => {
        const errors = validateLogin(formData)
        setErrors(errors)
    }, [formData])

    const handleSubmit = (event) => {
        event.preventDefault();
        postDataLogin(formData)
    }

    return (
        <div>
            <h1>Login to Natalux</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username2">Username:</label>
                    <input 
                        type="text"
                        name='username'
                        id='username2'
                        placeholder='johndoe123'
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <span>{errors.username}</span>}
                </div>

                <div>
                    <label htmlFor="password2">Password:</label>
                    <input 
                        type="password"
                        name='password'
                        id='password2'
                        placeholder='********'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>

                <button disabled={errors.username || errors.password} type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;