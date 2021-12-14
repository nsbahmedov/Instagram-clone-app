import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewPost } from '../../Posts/PostsSlice'

const AddNewPost = ({ user }) => {

    const dispatch = useDispatch()

    const [caption, setCaption] = useState('')
    const [rndmImgNum, setRndmImgUrl] = useState(Math.floor(Math.random() * 100))
    // random image to share
    const imgURL = `https://picsum.photos/seed/${rndmImgNum}/400/400`


    const handleUpload = (e) => {

        const postData = {
            caption: caption,
            userName: user.userName,
            imgURL: imgURL,
            userId: user.id
        }

        dispatch(addNewPost(postData))

        setCaption('')


        e.preventDefault()
    }


    return (
        <div>

            {/* share a post form */}
            <form className='form d-flex p-2'>

                {/* username */}
                <h1 className='userName fs-5 fw-bold py-3'>{user.userName}</h1>

                {/* post image */}
                <img src={imgURL} />

                {/* post caption */}
                <input
                    type='text'
                    value={caption}
                    maxLength='40'
                    onChange={(e) => {
                        setCaption(e.target.value)
                    }}
                    placeholder='post caption...'
                    className='my-2'
                    required
                />

                {/* share post button */}
                <button
                    type='button'
                    disabled={!caption}
                    className='btn'
                    onClick={handleUpload}
                >
                    Share
                </button>



            </form>
        </div>
    )
}


export default AddNewPost
