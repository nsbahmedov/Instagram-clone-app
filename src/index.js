import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {getAllUsers} from './components/Users/UsersSlice'
import {getAllPosts} from './components/Posts/PostsSlice'
import {getAllComments} from './components/Comments/CommentsSlice'


store.dispatch(getAllUsers())
store.dispatch(getAllPosts())
store.dispatch(getAllComments())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
