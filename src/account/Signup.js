import '../styles/signup.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='signup'>
            <div className='signup-form'>
                <div className='form'>
                    <div className='form-field'>
                        <input type='text' placeholder='@username' />
                    </div>
                    <div className='form-field'>
                        <input type='text' placeholder='First Name' />
                    </div>
                    <div className='form-field'>
                        <input type='text' placeholder='Last Name' />
                    </div>
                    <div className='form-field'>
                        <input type='text' placeholder='example@email.com' />
                    </div>
                    <div className='form-field'>
                        <input type='text' placeholder='Password' />
                    </div>
                    <div className='form-field'>
                        <input type='text' placeholder='Confirm Password' />
                    </div>
                    <div className='form-btn'>
                        <input type='submit' value='Register' />
                    </div>
                    <div className='form-field'>
                        Already have an account? <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
