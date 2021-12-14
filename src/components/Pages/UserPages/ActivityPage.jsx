import React from 'react'
import Navbar from '../../Profile/Navbar/Navbar'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { allUsers } from '../../Users/UsersSlice'





const ExplorePage = () => {


    const { userName } = useParams()
    const users = useSelector(allUsers)
    const currentUser = users.find(user => user.userName === userName)
    const isMentioned = useSelector(state => state.comments.comments.filter(cmt =>{
       return cmt.commentText.indexOf(`@${userName}`) !== -1
    }))

    const mentionedComments = isMentioned.map(comment => (
        <div className='d-flex p-3 my-4 fs-5 bg-white' key={comment.id}>
            <p>
                &#128172;
                <span className='fw-bold'>{comment.commentedUser}</span>
                &nbsp; mentioned you in a comment</p>
        </div>
    ))

    console.log(isMentioned);


    if (currentUser) {
        return (
            <div className='d-flex align-items-center'>
                    {/* navigation bar */}
                <Navbar 
                user={currentUser} />

                  <section>
                      {mentionedComments.length > 0 
                      ? mentionedComments
                      : <p className='p-4 bg-white mt-4 fs-6'>
                          &#128173;There is no any new activity yet.
                          </p>
                    }
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

export default ExplorePage
