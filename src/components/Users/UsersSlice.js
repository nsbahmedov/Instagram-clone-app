import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    status: 'idle',
    error: null,
    users: []
}

export const getAllUsers = createAsyncThunk (
    'users/getAllUsers',
    async () => {
        const url = 'http://localhost:5000/users'
        const request = await fetch(url)
        const data = await request.json()

        return data
    }
)

export const addNewUser = createAsyncThunk (
    'users/addNewUser',
    async (newUserData) => {
        const url = 'http://localhost:5000/users'
        const request = await fetch(url, {
            method : "POST",
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify(newUserData)
        })
        const data = await request.json()

        return data
    }
)




const usersSlice = createSlice ({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'completed'
            state.users = state.users.concat(action.payload)
        },

        [addNewUser.pending]: (state) => {
            state.status = 'waiting..'
        },
        [addNewUser.fulfilled]: (state, action) => {
            state.status = 'completed'
            state.users.push(action.payload)
        },
        [addNewUser.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})


export const allUsers = (state) => state.users.users

export default usersSlice.reducer