import '../styles/signup.css'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { push, ref } from 'firebase/database'
import { auth, db } from '../config/Config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [profileImage, setProfileImage] = useState('')
    const [bio, setBio] = useState('')
    const [noOfLikes, setNoOfLikes] = useState(0)
    const [noOfDownloads, setNoOfDownloads] = useState(0)
    const [uploadedWallpapers, setUploadedWallpapers] = useState({})

    const nav = useNavigate()

    const registerUser = async () => {
        if (username && firstName && lastName && email && password && confirmPassword) {
            if (password === confirmPassword) {
                if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                    const usersRef = ref(db, 'Users')
                    const user = {
                        username,
                        firstName,
                        lastName,
                        email,
                        password,
                        profileImage,
                        bio,
                        noOfLikes,
                        noOfDownloads,
                        uploadedWallpapers,
                    }
                    await push(usersRef, user)
                    try {
                        await createUserWithEmailAndPassword(
                            auth,
                            email,
                            password
                        )
                        nav('/profile')
                    } catch (error) {
                        console.log(error)
                    }
                    setUsername('')
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPassword('')
                    setConfirmPassword('')
                    setProfileImage('')
                    setBio('')
                    setNoOfLikes(0)
                    setNoOfDownloads(0)
                    setUploadedWallpapers({})
                } else {
                    alert('Invalid email')
                }
            } else {
                alert("Password and Confirm Password do not match.")
            }
        } else {
            alert("Please fill all the fields.")
        }
    }

    return (
        <div className='signup'>
            <div className='signup-form'>
                <div className='form'>
                    <div className='form-field'>
                        <input type='text' placeholder='@username'
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        />
                    </div>
                    <div className='form-field'>
                        <input type='text' placeholder='First Name'
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                        />
                    </div>
                    <div className='form-field'>
                        <input type='text' placeholder='Last Name'
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                        />
                    </div>
                    <div className='form-field'>
                        <input type='text' placeholder='example@email.com'
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
                    <div className='form-field'>
                        <input type='password' placeholder='Confirm Password'
                            onChange={(e) => {
                                setConfirmPassword(e.target.value)
                            }}
                        />
                    </div>
                    <div className='form-btn'>
                        <input type='submit' value='Register'
                            onClick={
                                () => {
                                    registerUser()
                                }
                            }
                        />
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
