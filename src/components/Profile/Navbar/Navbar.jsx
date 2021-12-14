import React from 'react'
import './NavbarStyle.css'
import Popup from 'reactjs-popup'
import AddNewPost from '../../Pages/UserPages/AddNewPost'
import { useNavigate } from 'react-router-dom'


const Navbar = ({ user }) => {

    const navigate = useNavigate()
    const fullName = user.fullName.split(' ')


    const addIcon = <div className="icon addIcon"> </div>
    const contentStyle = { background: '#fff' };
    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

    // popup to share new post
    const AddPostPopUp = () => (
        <Popup
            trigger={addIcon}
            {...{ contentStyle, overlayStyle }}
            position="top"
            modal={true}
        >
            {close => (
                <div>
                    <button className="btn-close fs-6" onClick={close}>
                    </button>
                    <AddNewPost user={user} />
                </div>
            )}
        </Popup>
    );

    return (
        <nav className="navbar">
            <div className="nav-wrapper">

                {/* app logo image */}
                <div className="brand-img"></div>

                {/* search box */}
                <div>
                    <input type="search" className="search-box" placeholder="Search" />
                </div>

                {/* navigation icons */}
                <div className="nav-items">
                     
                    {/* home icon */}
                    <span
                        className="icon homeIcon"
                        onClick={() => {
                            navigate(`/${user.userName}/home`)
                        }}
                    ></span>

                    {/* message icon */}
                    <span className="icon messengerIcon"> </span>

                    {/* share post icon */}
                    <AddPostPopUp />

                    {/* explore icon */}
                    <span
                        className="icon exploreIcon"
                        onClick={() => { navigate(`/${user.userName}/explore`) }}
                    > </span>

                    {/* likes icon */}
                    <span 
                    className="icon likeIcon"
                    onClick={() => { navigate(`/${user.userName}/activity`) }}
                    >
                    </span>

                    {/* user profile icon */}
                    <div
                        className="icon user-profile"
                        onClick={() => {
                            navigate(`/${user.userName}`)
                        }}
                    >
                        {/* user pofile img */}
                        <img
                            src={`https://ui-avatars.com/api/?name=${fullName[0]}+${fullName[1]}`}
                            alt='user-profile-img'
                            style={{ borderRadius: '50%' }}
                        />
                    </div>
                </div>
            </div>


        </nav>
    )
}


export default Navbar

