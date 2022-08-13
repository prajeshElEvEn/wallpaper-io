import '../styles/explore.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Explore = () => {
    return (
        <div className='explore'>
            <div className='navbar-container'>
                <div className='navbar'>
                    <div className='nav-logo'>
                        W
                    </div>
                    <div className='register-btn'>
                        <Link to="/signup">
                            <svg width="30" height="30" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2a4.505 4.505 0 0 0-4.5 4.5ZM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17Z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='main-container'>
                <div className='main'>
                    <div className='main-left'>
                        <div className='main-text'>
                            <div className='sub-title'>Find your wallpaper</div>
                            <div className='title'>Right Here.</div>
                            <div className='webpage'>
                                <a href="https://github.com/prajeshElEvEn/wallpaper-io" target="_blank" rel="noreferrer">
                                    <span>
                                        Wallpaper.io
                                    </span>
                                    <svg width="26" height="26" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3h-8Z"></path>
                                        <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7Z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className='end-title'>
                                Your place to find <span>#1</span> wallpapers.
                            </div>
                        </div>
                    </div>
                    <div className='main-right'>
                        <div className='main-search'>
                            <div className='main-right-top'>
                                <div className='search-box'>
                                    <input type='text' placeholder='Search "something"' />
                                    <svg width="30" height="30" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8Zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6Z"></path>
                                        <path d="M11.412 8.587c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.14-1.512-5.652 0L8.586 8.59c.76-.758 2.07-.756 2.826-.002Z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className='main-right-bottom'>
                                &copy; {new Date().getFullYear()} Eleven Co. Ltd.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='categories-container'>
                <div className='left-arrow'>
                    <svg width="20" height="20" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m4.43 12.823 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.57-.823l-13 9a1.003 1.003 0 0 0 0 1.645Z"></path>
                    </svg>
                </div>
                <div className='categories'>
                    <div className='category'>
                        <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3.998c-4.878 0-9 4.122-9 9s4.122 9 9 9c4.879 0 9-4.122 9-9s-4.121-9-9-9Zm5 10h-6v-6h2v4h4v2Zm3.292-7.292-3.01-3 1.412-1.417 3.01 3-1.412 1.417ZM5.282 2.292 6.7 3.704l-2.99 3-1.417-1.413 2.989-2.999Z"></path>
                        </svg>
                    </div>
                    <div className='category'>
                        <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.206 4.793a5.938 5.938 0 0 0-4.21-1.754 5.9 5.9 0 0 0-3.995 1.558 5.904 5.904 0 0 0-6.279-1.1 5.942 5.942 0 0 0-1.93 1.3c-2.354 2.363-2.353 6.06.001 8.412L12 21.416l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416Z"></path>
                        </svg>
                    </div>
                    <div className='category'>
                        <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m12 16 4-5h-3V4h-2v7H8l4 5Z"></path>
                            <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7Z"></path>
                        </svg>
                    </div>
                    <div className='category'>Scenery</div>
                    <div className='category'>Nature</div>
                    <div className='category'>Animals</div>
                    <div className='category'>Backgrounds</div>
                    <div className='category'>Abstract</div>
                    <div className='category'>Pattern</div>
                    <div className='category'>Mobile</div>
                    <div className='category'>PC</div>
                    <div className='category'>Animals</div>
                    <div className='category'>Animals</div>
                    <div className='category'>Animals</div>
                    <div className='category'>Animals</div>
                    <div className='category'>Animals</div>
                </div>
                <div className='right-arrow'>
                    <svg width="20" height="20" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1.001 1.001 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886Z"></path>
                    </svg>
                </div>
            </div>

            <div className='gallery'>
                <div className='gallery-container'>
                    <div className='date'>
                        10/06/2002
                    </div>
                    <div className='cards-container'>
                        <div className='card'>
                            <div className='card-image'></div>
                            <div className='card-data-container'>
                                <div className='card-data'>
                                    <div className='data-left'>
                                        <div className='card-pfp'></div>
                                        <div className='image-data'>
                                            <div className='image-title'>
                                                Nature's Beauty
                                            </div>
                                            <div className='image-author'>
                                                @username
                                            </div>
                                        </div>
                                    </div>
                                    <div className='image-stats'>
                                        <div className='image-likes'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.206 4.793a5.938 5.938 0 0 0-4.21-1.754 5.9 5.9 0 0 0-3.995 1.558 5.904 5.904 0 0 0-6.279-1.1 5.942 5.942 0 0 0-1.93 1.3c-2.354 2.363-2.353 6.06.001 8.412L12 21.416l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416Z"></path>
                                            </svg>
                                            <div className='likes-count'>
                                                1m
                                            </div>
                                        </div>
                                        <div className='image-downloads'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m12 16 4-5h-3V4h-2v7H8l4 5Z"></path>
                                                <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7Z"></path>
                                            </svg>
                                            <div className='downloads-count'>
                                                1k
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-image'></div>
                            <div className='card-data-container'>
                                <div className='card-data'>
                                    <div className='data-left'>
                                        <div className='card-pfp'></div>
                                        <div className='image-data'>
                                            <div className='image-title'>
                                                Nature's Beauty
                                            </div>
                                            <div className='image-author'>
                                                @username
                                            </div>
                                        </div>
                                    </div>
                                    <div className='image-stats'>
                                        <div className='image-likes'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.206 4.793a5.938 5.938 0 0 0-4.21-1.754 5.9 5.9 0 0 0-3.995 1.558 5.904 5.904 0 0 0-6.279-1.1 5.942 5.942 0 0 0-1.93 1.3c-2.354 2.363-2.353 6.06.001 8.412L12 21.416l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416Z"></path>
                                            </svg>
                                            <div className='likes-count'>
                                                1m
                                            </div>
                                        </div>
                                        <div className='image-downloads'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m12 16 4-5h-3V4h-2v7H8l4 5Z"></path>
                                                <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7Z"></path>
                                            </svg>
                                            <div className='downloads-count'>
                                                1k
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-image'></div>
                            <div className='card-data-container'>
                                <div className='card-data'>
                                    <div className='data-left'>
                                        <div className='card-pfp'></div>
                                        <div className='image-data'>
                                            <div className='image-title'>
                                                Nature's Beauty
                                            </div>
                                            <div className='image-author'>
                                                @username
                                            </div>
                                        </div>
                                    </div>
                                    <div className='image-stats'>
                                        <div className='image-likes'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.206 4.793a5.938 5.938 0 0 0-4.21-1.754 5.9 5.9 0 0 0-3.995 1.558 5.904 5.904 0 0 0-6.279-1.1 5.942 5.942 0 0 0-1.93 1.3c-2.354 2.363-2.353 6.06.001 8.412L12 21.416l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416Z"></path>
                                            </svg>
                                            <div className='likes-count'>
                                                1m
                                            </div>
                                        </div>
                                        <div className='image-downloads'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m12 16 4-5h-3V4h-2v7H8l4 5Z"></path>
                                                <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7Z"></path>
                                            </svg>
                                            <div className='downloads-count'>
                                                1k
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-image'></div>
                            <div className='card-data-container'>
                                <div className='card-data'>
                                    <div className='data-left'>
                                        <div className='card-pfp'></div>
                                        <div className='image-data'>
                                            <div className='image-title'>
                                                Nature's Beauty
                                            </div>
                                            <div className='image-author'>
                                                @username
                                            </div>
                                        </div>
                                    </div>
                                    <div className='image-stats'>
                                        <div className='image-likes'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.206 4.793a5.938 5.938 0 0 0-4.21-1.754 5.9 5.9 0 0 0-3.995 1.558 5.904 5.904 0 0 0-6.279-1.1 5.942 5.942 0 0 0-1.93 1.3c-2.354 2.363-2.353 6.06.001 8.412L12 21.416l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416Z"></path>
                                            </svg>
                                            <div className='likes-count'>
                                                1m
                                            </div>
                                        </div>
                                        <div className='image-downloads'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m12 16 4-5h-3V4h-2v7H8l4 5Z"></path>
                                                <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7Z"></path>
                                            </svg>
                                            <div className='downloads-count'>
                                                1k
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-image'></div>
                            <div className='card-data-container'>
                                <div className='card-data'>
                                    <div className='data-left'>
                                        <div className='card-pfp'></div>
                                        <div className='image-data'>
                                            <div className='image-title'>
                                                Nature's Beauty
                                            </div>
                                            <div className='image-author'>
                                                @username
                                            </div>
                                        </div>
                                    </div>
                                    <div className='image-stats'>
                                        <div className='image-likes'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.206 4.793a5.938 5.938 0 0 0-4.21-1.754 5.9 5.9 0 0 0-3.995 1.558 5.904 5.904 0 0 0-6.279-1.1 5.942 5.942 0 0 0-1.93 1.3c-2.354 2.363-2.353 6.06.001 8.412L12 21.416l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416Z"></path>
                                            </svg>
                                            <div className='likes-count'>
                                                1m
                                            </div>
                                        </div>
                                        <div className='image-downloads'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m12 16 4-5h-3V4h-2v7H8l4 5Z"></path>
                                                <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7Z"></path>
                                            </svg>
                                            <div className='downloads-count'>
                                                1k
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-image'></div>
                            <div className='card-data-container'>
                                <div className='card-data'>
                                    <div className='data-left'>
                                        <div className='card-pfp'></div>
                                        <div className='image-data'>
                                            <div className='image-title'>
                                                Nature's Beauty
                                            </div>
                                            <div className='image-author'>
                                                @username
                                            </div>
                                        </div>
                                    </div>
                                    <div className='image-stats'>
                                        <div className='image-likes'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.206 4.793a5.938 5.938 0 0 0-4.21-1.754 5.9 5.9 0 0 0-3.995 1.558 5.904 5.904 0 0 0-6.279-1.1 5.942 5.942 0 0 0-1.93 1.3c-2.354 2.363-2.353 6.06.001 8.412L12 21.416l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416Z"></path>
                                            </svg>
                                            <div className='likes-count'>
                                                1m
                                            </div>
                                        </div>
                                        <div className='image-downloads'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m12 16 4-5h-3V4h-2v7H8l4 5Z"></path>
                                                <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7Z"></path>
                                            </svg>
                                            <div className='downloads-count'>
                                                1k
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-image'></div>
                            <div className='card-data-container'>
                                <div className='card-data'>
                                    <div className='data-left'>
                                        <div className='card-pfp'></div>
                                        <div className='image-data'>
                                            <div className='image-title'>
                                                Nature's Beauty
                                            </div>
                                            <div className='image-author'>
                                                @username
                                            </div>
                                        </div>
                                    </div>
                                    <div className='image-stats'>
                                        <div className='image-likes'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.206 4.793a5.938 5.938 0 0 0-4.21-1.754 5.9 5.9 0 0 0-3.995 1.558 5.904 5.904 0 0 0-6.279-1.1 5.942 5.942 0 0 0-1.93 1.3c-2.354 2.363-2.353 6.06.001 8.412L12 21.416l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416Z"></path>
                                            </svg>
                                            <div className='likes-count'>
                                                1m
                                            </div>
                                        </div>
                                        <div className='image-downloads'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m12 16 4-5h-3V4h-2v7H8l4 5Z"></path>
                                                <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7Z"></path>
                                            </svg>
                                            <div className='downloads-count'>
                                                1k
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='gallery-container'>
                    <div className='date'>
                        17/02/2002
                    </div>
                    <div className='cards-container'>
                        <div className='card'>
                            <div className='card-image'></div>
                            <div className='card-data-container'>
                                <div className='card-data'>
                                    <div className='data-left'>
                                        <div className='card-pfp'></div>
                                        <div className='image-data'>
                                            <div className='image-title'>
                                                Nature's Beauty
                                            </div>
                                            <div className='image-author'>
                                                @username
                                            </div>
                                        </div>
                                    </div>
                                    <div className='image-stats'>
                                        <div className='image-likes'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.206 4.793a5.938 5.938 0 0 0-4.21-1.754 5.9 5.9 0 0 0-3.995 1.558 5.904 5.904 0 0 0-6.279-1.1 5.942 5.942 0 0 0-1.93 1.3c-2.354 2.363-2.353 6.06.001 8.412L12 21.416l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416Z"></path>
                                            </svg>
                                            <div className='likes-count'>
                                                1m
                                            </div>
                                        </div>
                                        <div className='image-downloads'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m12 16 4-5h-3V4h-2v7H8l4 5Z"></path>
                                                <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7Z"></path>
                                            </svg>
                                            <div className='downloads-count'>
                                                1k
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-image'></div>
                            <div className='card-data-container'>
                                <div className='card-data'>
                                    <div className='data-left'>
                                        <div className='card-pfp'></div>
                                        <div className='image-data'>
                                            <div className='image-title'>
                                                Nature's Beauty
                                            </div>
                                            <div className='image-author'>
                                                @username
                                            </div>
                                        </div>
                                    </div>
                                    <div className='image-stats'>
                                        <div className='image-likes'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.206 4.793a5.938 5.938 0 0 0-4.21-1.754 5.9 5.9 0 0 0-3.995 1.558 5.904 5.904 0 0 0-6.279-1.1 5.942 5.942 0 0 0-1.93 1.3c-2.354 2.363-2.353 6.06.001 8.412L12 21.416l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416Z"></path>
                                            </svg>
                                            <div className='likes-count'>
                                                1m
                                            </div>
                                        </div>
                                        <div className='image-downloads'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m12 16 4-5h-3V4h-2v7H8l4 5Z"></path>
                                                <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7Z"></path>
                                            </svg>
                                            <div className='downloads-count'>
                                                1k
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-image'></div>
                            <div className='card-data-container'>
                                <div className='card-data'>
                                    <div className='data-left'>
                                        <div className='card-pfp'></div>
                                        <div className='image-data'>
                                            <div className='image-title'>
                                                Nature's Beauty
                                            </div>
                                            <div className='image-author'>
                                                @username
                                            </div>
                                        </div>
                                    </div>
                                    <div className='image-stats'>
                                        <div className='image-likes'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.206 4.793a5.938 5.938 0 0 0-4.21-1.754 5.9 5.9 0 0 0-3.995 1.558 5.904 5.904 0 0 0-6.279-1.1 5.942 5.942 0 0 0-1.93 1.3c-2.354 2.363-2.353 6.06.001 8.412L12 21.416l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416Z"></path>
                                            </svg>
                                            <div className='likes-count'>
                                                1m
                                            </div>
                                        </div>
                                        <div className='image-downloads'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m12 16 4-5h-3V4h-2v7H8l4 5Z"></path>
                                                <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7Z"></path>
                                            </svg>
                                            <div className='downloads-count'>
                                                1k
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-image'></div>
                            <div className='card-data-container'>
                                <div className='card-data'>
                                    <div className='data-left'>
                                        <div className='card-pfp'></div>
                                        <div className='image-data'>
                                            <div className='image-title'>
                                                Nature's Beauty
                                            </div>
                                            <div className='image-author'>
                                                @username
                                            </div>
                                        </div>
                                    </div>
                                    <div className='image-stats'>
                                        <div className='image-likes'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.206 4.793a5.938 5.938 0 0 0-4.21-1.754 5.9 5.9 0 0 0-3.995 1.558 5.904 5.904 0 0 0-6.279-1.1 5.942 5.942 0 0 0-1.93 1.3c-2.354 2.363-2.353 6.06.001 8.412L12 21.416l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416Z"></path>
                                            </svg>
                                            <div className='likes-count'>
                                                1m
                                            </div>
                                        </div>
                                        <div className='image-downloads'>
                                            <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m12 16 4-5h-3V4h-2v7H8l4 5Z"></path>
                                                <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7Z"></path>
                                            </svg>
                                            <div className='downloads-count'>
                                                1k
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore
