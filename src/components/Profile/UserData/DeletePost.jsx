import React from 'react'
import { useDispatch } from 'react-redux';
import { deletePost } from '../../Posts/PostsSlice';



const DeletePost = ({postId}) => {

    const dispatch = useDispatch()

    // request and delete selected post
    const handleDelete = () => {
        if(window.confirm('are you sure to delete?')) {  
            dispatch(deletePost(postId));
            document.location.reload()
        }
    }

    // style for close-btn
    const closeStyle = {
        btnStyle: {
            position: 'relative',
            top: '25px',
            left: '3px',
            border: '1px solid #eee'
        }
    }


    return (
        <div>
            <button 
            type="button" 
            style ={closeStyle.btnStyle}
            class="btn-close" 
            onClick={handleDelete}>    
            </button>
        </div>
    )
}

export default DeletePost
