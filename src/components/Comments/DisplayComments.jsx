import React from 'react'
import DeleteComment from './DeleteComment'



const DisplayComments = ({comments}) => {


    const renderComments = comments.map( comment => (
        <div 
        key={comment.id}
        className='text-muted d-flex flex-row align-items-center justify-content-between my-2'
        >
            <p>{comment.commentText}</p>
            <p className='fw-bold ms-2'>@{comment.commentedUser}</p>
            <DeleteComment commentId={comment.id} />
        </div>
    )
    )

    return (
        <div className='p-3'>
            {renderComments}
        </div>
    )
}

export default DisplayComments
