import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null,
    status : 'idle',
    posts: [],
}

export const getAllPosts = createAsyncThunk (
    'posts/getAllPosts',
    async () => {
        const url = 'http://localhost:5000/posts'
        const request = await fetch(url)
        const data = await request.json()
        return data
    }
)

export const addNewPost = createAsyncThunk (
    'posts/addNewPost',
    async(userPostData) => {
        const url = 'http://localhost:5000/posts'
        const request = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify(userPostData)
        })

        const data = await request.json()
        return data
    }
)

    

export const deletePost = createAsyncThunk (
    'posts/deletePost',
    async(userPostId) => {
        const url = `http://localhost:5000/posts/${userPostId}`
        const request = await fetch(url, {
            method: 'DELETE'
        })
    }
)



export const PostsSlice = createSlice ({
    name: 'posts',
    initialState,
    reducers:{},
    extraReducers:{
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'completed'
            state.posts = state.posts.concat(action.payload)
        },
        [addNewPost.fulfilled]: (state, action) => {
            state.status = 'New Post Added'
            state.posts.push(action.payload)
        },
        [deletePost.fulfilled]: (state) => {
            state.status = 'post deleted'
        }
    }
})

export const allPosts = (state) => state.posts.posts
export const postsByUserId = (state, userId) => state.posts.posts.filter(post => post.userId === userId)


export default PostsSlice.reducer