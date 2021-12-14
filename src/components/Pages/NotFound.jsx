import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';


const NotFound = () => {

    const navigate = useNavigate()

    return (
        <div className='container text-center p-5'>
            <h1 className='alert text-secondary fs-1'>404 error: Page is not found</h1>
            <Link to='/'> Go back </Link>
        </div>
    )
}

export default NotFound
