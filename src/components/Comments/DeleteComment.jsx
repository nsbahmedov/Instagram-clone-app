import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteComment } from './CommentsSlice'



const DeleteComment = ({commentId}) => {


    const dispatch = useDispatch()

    const handleDeleteComment= () => {
        let confirmInfo = window.confirm('Are you sure to delete comment?')

        if(confirmInfo) {
            dispatch(deleteComment(commentId))
            document.location.reload()
        }
    }


    return (
        <div>
            <button 
            className='btn-close ms-2'
            style={{fontSize: '12px'}}
            onClick={handleDeleteComment}
            ></button>
        </div>
    )
}

export default DeleteComment
