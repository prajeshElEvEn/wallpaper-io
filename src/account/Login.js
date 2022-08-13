import React, { useState } from 'react'
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/Config'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const nav = useNavigate()

    const login = async () => {
        if (email && password) {
            if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                try {
                    await signInWithEmailAndPassword(
                        auth,
                        email,
                        password
                    )
                    setEmail('')
                    setPassword('')
                    nav('/profile')
                } catch (error) {
                    console.log(error)
                }
            } else {
                alert('Invalid email')
            }
        } else {
            alert('Please fill all the fields')
        }
    }
    return (
        <div className='login'>
            <div className='login-form'>
                <div className='form'>
                    <div className='form-field'>
                        <input type='text' placeholder='@username'
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div className='form-field'>
                        <input type='password' placeholder='Password'
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
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
