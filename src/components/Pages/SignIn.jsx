import React, {useState} from 'react'
import './SignInStyle.css'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {allUsers} from '../Users/UsersSlice'





const SignIn = () => {

    const[userName, setUserName] = useState('')
    const[password, setPassword] = useState('')
    const[info, setInfo] = useState('')
    const navigate = useNavigate()


    const users = useSelector(allUsers)
    // if username and password is correct
    const currentUser = users.find(
        user => user.userName === userName && user.password === password
    )


    const handleLogIn = (e) => {
        // user exist and successfully log in
        if(currentUser) {
            const userName = currentUser.userName
            navigate(`/${userName}`)
        }
        else {
            setInfo('Username or password is incorrect !')
        }

        e.preventDefault()
    }



    return (
        <div>
  <span id="root">
    <section className="section-all">

      <main className="main" role="main">
        <div className="wrapper">
          <article className="article">
            <div className="content">
              <div className="login-box">
                <div className="header">
                  <img className="logo"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram" />
                </div>
                <div className="form-wrap">

                    {/* signIn form */}
                  <form onSubmit={handleLogIn} className="form">

                    {/* username input */}
                    <div className="input-box">
                      <input 
                      type="text" 
                      value={userName}
                      placeholder="Username"
                      onChange= {(e)=>{
                          setUserName(e.target.value)
                          setInfo('')
                      }}
                       required />
                    </div>  

                    {/* password input */}
                    <div className="input-box">
                      <input 
                      type="password" 
                      value={password}
                      placeholder="Password" 
                      onChange= {(e)=>{
                        setPassword(e.target.value)
                        setInfo('')
                    }}
                      required />
                    </div>

                    {/* display error message */}
                    <div className='text-center text-danger'>
                        <p>{info}</p>
                    </div>  

                    {/* log in button */}
                    <span className="button-box">
                      <button className="btn" type="submit">Log in</button>
                    </span>  

                    <a className="forgot" href="">Forgot password?</a>
                  </form>
                </div> 
              </div> 

                    {/* if don't have an account go to sign up */}
              <div className="login-box">
                <p className="text">Don't have an account?<Link to='/signup'>Sign up</Link></p>
              </div>

                    {/* get download app */}
              <div className="app">
                <p>Get the app.</p>
                <div className="d-flex app-img">
                  <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8">
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/4b70f6fae447.png" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge">
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/f06b908907d5.png" />
                  </a>  
                </div>  
              </div>
            </div> 
          </article>
        </div> 
      </main>

      
    </section>
  </span>

 
</div>
  
    )
}

export default SignIn
