import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import SignIn from './components/Pages/SignIn'
import SignUp from './components/Pages/SignUp'
import {useSelector} from 'react-redux'
import {allUsers} from './components/Users/UsersSlice'
import Profile from './components/Profile/Profile'
import NotFound from './components/Pages/NotFound'
import HomePage from './components/Pages/UserPages/HomePage'
import ExplorePage from './components/Pages/UserPages/ExplorePage'
import ActivityPage from './components/Pages/UserPages/ActivityPage'



const App = () => {

  const users = useSelector(allUsers)

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={users.length !== 0 ? <SignIn /> : <SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/:userName' element={<Profile />} />
          <Route path='/:userName/home' element={<HomePage />} />
          <Route path='/:userName/explore' element={<ExplorePage />} />
          <Route path='/:userName/activity' element={<ActivityPage />} />
          
          {/* when url is not found */}
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
