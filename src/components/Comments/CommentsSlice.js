import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    error: null,
    comments: [
        
    ]
}

export const getAllComments = createAsyncThunk (
    'comments/getAllComments',
    async () => {
        const url='http://localhost:5000/comments'
        const request = await fetch(url)
        const data = request.json()

        return data
    }
)

export const addNewComment = createAsyncThunk (
    'comments/addNewComment',
    async(commentTextData)=> {
        const url=`http://localhost:5000/comments`
        const request = await fetch(url, {
            method : "POST",
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify(commentTextData)
        })
        const data = await request.json()

        return data
    }
)

export const deleteComment = createAsyncThunk (
    'comments/deleteComment',
    async(commentId) => {
        const url=`http://localhost:5000/comments/${commentId}`
        const request = await fetch(url, {
            method: "DELETE"
        })
        const data = request.json()

        return data
    }
)


export const CommentsSlice = createSlice ({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllComments.fulfilled]: (state, action) => {
            state.comments = state.comments.concat(action.payload)
        },
        [addNewComment.fulfilled]: (state, action) => {
            state.comments.push(action.payload)
        }
    }
})

export const allComments = (state) => state.comments.comments

export default CommentsSlice.reducer