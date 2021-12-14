import React from 'react'
import './UserInfoStyle.css'
import { Link } from 'react-router-dom';
import UserPosts from '../UserData/UserPosts';
import { useSelector } from 'react-redux'
import { postsByUserId } from '../../Posts/PostsSlice'
import { BiGrid, BiPlayCircle, BiBookmark, BiUserPin } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";




const UserInfo = ({ user }) => {

    const userName = user.userName
    const fullName = user.fullName.split(' ')

    const userPosts = useSelector(state => postsByUserId(state, user.id))

    return (
        <div>
            <header className='userSection container d-flex flex-column align-items-center'>

                {/* left-side of user header profile */}
                <div className='aboutUser d-flex flex-row'>
                    <div className='userPicture'>
                        <div className='userImg'>
                            <img
                                src={`https://ui-avatars.com/api/?name=${fullName[0]}+${fullName[1]}}`}
                                style={{ borderRadius: '50%' }}
                            ></img>
                        </div>
                    </div>

                    {/* right-side of user header profile */}
                    <div className='userDetails d-flex'>
                        <div className='userUserName d-flex flex-row align-items-center p-2'>

                            {/* username */}
                            <h2 className='userName fs-3 fw-light'>{userName}</h2>
                            <div className='editProfile d-flex flex-row align-items-center'>
                                <button className='editBtn btn bg-transparent'>
                                    <Link to='/'>Log out</Link>
                                </button>
                                <div className='settingsIcon mx-2 p-2'>
                                    <FiSettings fontSize='18'></FiSettings>
                                </div>
                            </div>
                            
                        </div>

                        {/* user actions */}
                        <div className='userActions d-flex flex-row p-2'>
                            <p><span className='fw-bold'>{userPosts.length} </span> posts</p>
                            <p className='px-5'><span className='fw-bold'>0 </span> followers</p>
                            <p><span className='fw-bold'>0 </span> following</p>
                        </div>
                        <div className='userBio p-2'>
                            <h5 className='fw-bold'>{user.fullName}</h5>
                            <p>Talk is cheap, show me the code!</p>
                        </div>
                    </div>
                </div>

                {/* categories icons */}
                <div className='userContent container d-flex flex-row justify-content-center'>
                    <div className='d-flex flex-row justify-content-around w-50'>
                        <div className='contentLink p-3'>
                            <span><BiGrid fontSize='20'></BiGrid> POSTS</span>
                        </div>
                        <div className='contentLink p-3'>
                            <span><BiPlayCircle fontSize='20'></BiPlayCircle> VIDEOS</span>
                        </div>
                        <div className='contentLink p-3'>
                            <span><BiBookmark fontSize='20'></BiBookmark> SAVED</span>
                        </div>
                        <div className='contentLink p-3'>
                            <span><BiUserPin fontSize='20'></BiUserPin> TAGGED</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* user action content: posts | videos | saved | tagged */}
            <section className='d-flex align-items-center'>
                <UserPosts userId={user.id} />
            </section>
        </div>
    )
}


export default UserInfo
