import React from 'react'
import { useSelector } from 'react-redux'
import { postsByUserId } from '../../Posts/PostsSlice'
import DeletePost from './DeletePost'



const UserPosts = ({ userId }) => {


    // user posts to display on profile
    const userPosts = useSelector(state => postsByUserId(state, userId))
    
    const renderPosts = userPosts.map(post => (
        <div key={post.id} className='p-2'>
                <DeletePost postId={post.id} />
                <img 
                className='pb-2'
                style={{borderBottom:'1px solid #eee'}}
                src={post.imgURL} 
                width={300} 
                height={300} />
                <p
                className='pt-2'
                >
                    {post.caption}
                    </p>
        </div>
    ))

        

    return (
        <div className='d-flex flex-row justify-content-center jus flex-wrap w-75'>
            {renderPosts}
        </div>
    )
}

export default UserPosts
