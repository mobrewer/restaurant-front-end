import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='nav'>
            <Link className='link' to={'/'}>Home</Link>
            <Link className='link' to={'/all'}>Your Restaurants</Link>
            <Link className='link' to={'/about'}>About</Link>
        </nav>
    )
}
export default Navbar