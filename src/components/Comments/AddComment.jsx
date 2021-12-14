import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewComment, allComments } from './CommentsSlice'
import DisplayComments from './DisplayComments'



const AddComment = ({postId, commentedUser}) => {

    const [comment, setComment] = useState('')
    const dispatch = useDispatch()
    const allPostComments = useSelector(allComments)

    // filter comments of post
    const postComments = allPostComments.filter(comment => {
        return comment.postId === postId
    })

    // add comment function
    const handleAddComment = () => {
        if(comment) {
            dispatch(addNewComment({
                commentText: comment, 
                postId: postId, 
                commentedUser: commentedUser
            }))
            setComment('')
        }
    }



    return (
        <div>
                {/* display add comments to post */}
            <DisplayComments comments={postComments} />

                {/* add new comment div */}
            <div className='d-flex flex-row justify-content-between'>
                    <input 
                    style={{width:'88%', fontSize:'14px'}}
                    className='p-3 py-3' 
                    placeholder='Add a comment... @ to mention someone'
                    value={comment}
                    onChange={(e)=>{setComment(e.target.value)}}
                    />

                    <button 
                    type='button' 
                    style={{width:'12%', height:'100%'}} 
                    className='btn'
                    onClick={handleAddComment}
                    >
                        &#128172;
                    </button>
                </div>
            </div>
    )
}

export default AddComment
