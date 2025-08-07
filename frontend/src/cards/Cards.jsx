import React from 'react'
import { useEffect } from 'react'

const Cards = () => {

    useEffect(() => {
       const user = fetch('')
    },[user])
    return (
        <div className='cards'>




            <h1>{user.name}</h1>

            <h2>{user.email}</h2>

            <h2>{user.address}</h2>

            <h2>{user.contactNo}</h2>

            <h2>{user.website}</h2>
        </div>
    )
}

export default Cards