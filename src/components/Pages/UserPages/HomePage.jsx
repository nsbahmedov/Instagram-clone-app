import React, { useState } from 'react'
import Navbar from '../../Profile/Navbar/Navbar'
import { useSelector } from 'react-redux'
import { allUsers } from '../../Users/UsersSlice'
import { allPosts } from '../../Posts/PostsSlice'
import { useParams } from 'react-router'
import { BiHeart, BiComment, BiNavigation, BiBookmark } from "react-icons/bi";
import AddComment from '../../Comments/AddComment'



const HomePage = () => {

    const {userName} = useParams()
    const users = useSelector(allUsers)
    const currentUser = users.find(user => user.userName === userName)
    const allUserPosts = useSelector(allPosts)

    // change icon color
    const [isHeartClicked, setIsHeartClicked] = useState(false)


    const renderAllPosts = allUserPosts.map(post=>(
        <div key='post.id' style={{width:'500px', border:'1px solid #eee'}} className='my-3 bg-white' >
            
                {/* username of who shared post */}
             <h1 className='fs-5 fw-bold p-3'>{post.userName}</h1>

                {/* posted image */}
             <img src={post.imgURL} className='my-2'/>

                {/* post action icons */}
                <div className='icons d-flex flex-row justify-content-between fs-4 p-3'>
                    <div className='d-flex flex-row'>
                    <span onClick={()=>{setIsHeartClicked(!isHeartClicked)}}>
                    <BiHeart color={isHeartClicked ? 'red' : 'black'}></BiHeart>
                    </span>
                    <span className='mx-2'>
                    <BiComment></BiComment>
                    </span>
                    <span>
                    <BiNavigation></BiNavigation>
                    </span> 
                    </div>
                    <div>
                         <span>
                    <BiBookmark></BiBookmark>
                    </span>
                    </div>
                   
                </div>
                <p className='fs-6 ms-3 '>{post.caption}</p>  

                {/* add new comment component */}
                <AddComment postId={post.id} commentedUser={userName}/>
        </div>
    ))

    if(currentUser) {
        return (
        <div>
            <Navbar user={currentUser} />

                {/* display all posts in store */}
            <section className='d-flex align-items-center'>
            <div className='container d-flex align-items-center w-50 p-2'>
                {renderAllPosts}
            </div>
            </section>
        </div>
    )
        }
    
    return (
        <div className='d-flex text-center p-5'>
            <h1 className='text-muted fs-5 p-5'>Loading...</h1>
        </div>
    )

        
}

export default HomePage
