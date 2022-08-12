import '../styles/profile.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <div className='profile'>
            <div className='navbar-container'>
                <div className='navbar'>
                    <div className='nav-left'>
                        <Link to="/">
                            W
                        </Link>
                    </div>
                    <div className='nav-right'>
                        <div className='nav-item'>
                            <Link to="/settings">
                                <svg width="30" height="30" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.22.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.093 8.093 0 0 0 1.895-1.112l1.396.806c.477.275 1.09.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.684 7.684 0 0 0-.002-2.224l1.372-.793c.476-.275.64-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a1 1 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366ZM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4Z"></path>
                                </svg>
                            </Link>
                        </div>
                        <div className='nav-item'>
                            <Link to="/">
                                <svg width="30" height="30" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m2 12 5 4v-3h9v-2H7V8l-5 4Z"></path>
                                    <path d="M13 3a8.938 8.938 0 0 0-6.363 2.637L8.05 7.051A6.955 6.955 0 0 1 13 5c1.87 0 3.628.729 4.95 2.051a6.955 6.955 0 0 1 2.05 4.95c0 1.87-.728 3.628-2.05 4.95A6.955 6.955 0 0 1 13 19.002a6.955 6.955 0 0 1-4.95-2.051l-1.414 1.414A8.938 8.938 0 0 0 13 21.002a8.938 8.938 0 0 0 6.364-2.637 8.938 8.938 0 0 0 2.637-6.364 8.938 8.938 0 0 0-2.637-6.364A8.938 8.938 0 0 0 13 3Z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='dashboard-container'>
                <div className='dashboard'>
                    <div className='dash-left'>
                        <div className='pfp'></div>
                    </div>
                    <div className='dash-right'>
                        <div className='top-bar'>
                            <div className='username'>
                                <span>@</span>username
                            </div>
                            <div className='numbers'>
                                <div className='downloads'>
                                    <span>1000</span>
                                    <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m12 16 4-5h-3V4h-2v7H8l4 5Z"></path>
                                        <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7Z"></path>
                                    </svg>
                                </div>
                                <div className='likes'>
                                    <span>1,000,000</span>
                                    <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.206 4.793a5.938 5.938 0 0 0-4.21-1.754 5.9 5.9 0 0 0-3.995 1.558 5.904 5.904 0 0 0-6.279-1.1 5.942 5.942 0 0 0-1.93 1.3c-2.354 2.363-2.353 6.06.001 8.412L12 21.416l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416Z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='bio-container'>
                            <div className='bio'>
                                <div className='bio-text'>
                                    i like cats ;)
                                </div>
                                <div className='edit-text'>
                                    <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.045 7.398c.378-.378.586-.88.586-1.414 0-.534-.208-1.036-.586-1.414l-1.586-1.586a1.986 1.986 0 0 0-1.414-.586c-.534 0-1.036.208-1.413.585L4 13.583v4.414h4.413L19.045 7.398Zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584ZM6 15.998v-1.586l7.04-7.018 1.586 1.586-7.039 7.017H6Zm-2 4h16v2H4v-2Z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='upload-container'>
                        <div className='upload'>
                            <div className='upload-text'>
                                Upload your wallpaper (1920x1080 or 1080x1920).
                            </div>
                            <div className='upload-btn'>
                                Upload
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
