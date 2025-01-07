import React, { useEffect, useState } from 'react';
import { validateLogin } from '../../helpers/validate';
import { postDataLogin } from '../../helpers/PostData';
import style from './Login.module.css';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const {setUser} = useUser(); //Esto puede ir en posData?
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
        postDataLogin(formData, setUser, navigate)
    }

    return (
        <div className={style.loginContainer}>
            <div className={style.formWrapper}>
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
                        {errors.username && (
                            <>
                                <br /> 
                                <span className={style.error}>{errors.username}</span>
                            </>
                        )}
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
                       {errors.password && (
                            <>
                                <br /> 
                                <span className={style.error}>{errors.password}</span>
                            </>
                        )}
                    </div>

                    <button disabled={errors.username || errors.password} type='submit' onClick={() => window.scrollTo(0, 0)}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;