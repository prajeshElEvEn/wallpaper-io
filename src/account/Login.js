import React from 'react'
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const nav = useNavigate()
    const login = () => {
        nav('/profile')
    }
    return (
        <div className='login'>
            <div className='login-form'>
                <div className='form'>
                    <div className='form-field'>
                        <input type='text' placeholder='@username' />
                    </div>
                    <div className='form-field'>
                        <input type='text' placeholder='Password' />
                    </div>
                    <div className='form-btn'>
                        <input type='submit' value='Login' onClick={
                            () => {
                                login()
                            }
                        } />
                    </div>
                    <div className='form-field'>
                        Do not have an account? <Link to='/signup'>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
