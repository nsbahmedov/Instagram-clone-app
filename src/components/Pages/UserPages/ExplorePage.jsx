import React from 'react'
import Navbar from '../../Profile/Navbar/Navbar'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { allUsers } from '../../Users/UsersSlice'





const ExplorePage = () => {


    const { userName } = useParams()

    const users = useSelector(allUsers)
    const currentUser = users.find(user => user.userName === userName)



    if (currentUser) {
        return (
            <div className='d-flex align-items-center'>
                    {/* navigation bar */}
                <Navbar user={currentUser} />

                    {/* explore images */}
                <section className='w-75'>
                    <div className="container p-4">
                        <div className="row flex-row">
                            <div className="col p-2">
                               <img src={'https://picsum.photos/250/250?random=1'} />
                            </div>
                            <div className="col p-2">
                            <img src={'https://picsum.photos/250/250?random=2'} />
                            </div>
                            <div className="col p-2">
                            <img src={'https://picsum.photos/250/250?random=3'} />
                            </div>
                        </div>
                        <div className="row flex-row">
                            <div className="col p-2">
                            <img src={'https://picsum.photos/250/250?random=4'} />
                            </div>
                            <div className="col p-2">
                            <img src={'https://picsum.photos/250/250?random=5'} />
                            </div>
                            <div className="col p-2">
                            <img src={'https://picsum.photos/250/250?random=6'} />
                            </div>
                        </div>
                        <div className="row flex-row">
                            <div className="col p-2">
                            <img src={'https://picsum.photos/250/250?random=7'} />
                            </div>
                            <div className="col p-2">
                            <img src={'https://picsum.photos/250/250?random=8'} />
                            </div>
                            <div className="col p-2">
                            <img src={'https://picsum.photos/250/250?random=9'} />
                            </div>
                        </div>
                        <div className="row flex-row">
                            <div className="col p-2">
                            <img src={'https://picsum.photos/250/250?random=10'} />
                            </div>
                            <div className="col p-2">
                            <img src={'https://picsum.photos/250/250?random=11'} />
                            </div>
                            <div className="col p-2">
                            <img src={'https://picsum.photos/250/250?random=12'} />
                            </div>
                        </div>
                        <div className="row flex-row">
                            <div className="col p-2">
                            <img src={'https://picsum.photos/250/250?random=13'} />
                            </div>
                            <div className="col p-2">
                            <img src={'https://picsum.photos/250/250?random=14'} />
                            </div>
                            <div className="col p-2">
                            <img src={'https://picsum.photos/250/250?random=15'} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className='d-flex text-center p-5'>
            <h1 className='text-muted fs-5 p-5'>Loading...</h1>
        </div>
    )
}

export default ExplorePage
