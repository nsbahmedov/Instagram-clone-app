import { configureStore } from '@reduxjs/toolkit';
import UsersReducer from '../components/Users/UsersSlice';
import PostsReducer from '../components/Posts/PostsSlice';
import CommentsReducer from '../components/Comments/CommentsSlice';

export const store = configureStore({
  reducer: {
    users: UsersReducer,
    posts: PostsReducer,
    comments: CommentsReducer
  },
});
