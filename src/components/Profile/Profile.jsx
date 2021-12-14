import React from 'react'
import { useParams } from 'react-router'
import { allUsers } from '../Users/UsersSlice'
import { useSelector } from 'react-redux'
import Navbar from './Navbar/Navbar'
import UserInfo from './UserInfo/UserInfo'
import { Link } from 'react-router-dom';


const Profile = () => {

    const { userName } = useParams()

    const users = useSelector(allUsers)
    const currentUser = users.find(user => user.userName === userName)


    if (currentUser) {
        return (
            <div className='w-100 d-flex'>
                <Navbar user={currentUser} />
                <UserInfo user={currentUser} />
            </div>
        )
    }

    return (
        <div>
            <div className='container text-center p-5'>
                <h1 className='text-secondary fs-1 p-5'>Looking for user...</h1>
                <Link to='/'>Go back</Link>
            </div>
        </div>
    )


}




export default Profile
