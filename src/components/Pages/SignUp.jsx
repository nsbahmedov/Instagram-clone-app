import React, { useState } from 'react'
import './SignUpStyle.css'
import { Link, useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { addNewUser, allUsers } from '../Users/UsersSlice'







const SignUp = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [info, setInfo] = useState('')

  const isActive = [email, fullName, userName, password.length > 5].every(Boolean)
  const inputs = [email, fullName, userName, password].every(Boolean)

  // look up for is user already exist?
  const registeredUsers = useSelector(allUsers)
  const isExist = registeredUsers.find(user => user.userName === userName)


  const handleAddNewUser = (e) => {

    // when user is already exist
    if (isExist) setInfo('This username is already exist. Please try another!')

    // all fields filled and create new user object
    if (inputs && !isExist) {
      const newUser = {
        email: email,
        fullName: fullName,
        userName: userName,
        password: password,
        id: nanoid()
      }

      // send addNewUser request
      dispatch(addNewUser(newUser))

      // return to sign in
      navigate('/')
    }

    e.preventDefault()
  }


  return (
    <main>
      <div className="page">
        <div className="header">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram" />
          <p className='text-muted text-center fs-6'>Sign up to see photos and videos from your friends.</p>
          <button className='btn-primary'>Log in with Facebook</button>
          <div>
            <hr />
            <p>OR</p>
            <hr />
          </div>
        </div>

        {/* new user register form */}
        <div className="container">
          <form onSubmit={handleAddNewUser}>
            {/* user email */}
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value)
              }} />

              {/* user fullName */}
            <input
              type="text"
              value={fullName}
              placeholder="Full Name"
              onChange={(e) => {
                setFullName(e.target.value)
              }} />

              {/* user userName */}
            <input
              type="text"
              value={userName}
              placeholder="Username"
              onChange={(e) => {
                setUserName(e.target.value)
              }} />

              {/* user password */}
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value)
              }} />

              {/* display error message */}
            <div className='text-center text-danger'>
              <p>{info}</p>
            </div>

            {/* sign up|register button */}
            <button type='submit' className='btn' disabled={!isActive}>Sign up</button>
          </form>


        </div>
      </div>
      
      {/* if user has an account go to sign in */}
      <div className="option">
        <p>Have an account? <Link to='/signin'>Log in</Link></p>
      </div>

    </main>


  )
}

export default SignUp
