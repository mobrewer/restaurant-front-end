import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function RestaurantsList({ setAllRestaurants, allRestaurants }) {
    const navigate = useNavigate()

    const [sortParam, setSortParam] = useState(null)
    const handleDelete = async (name) => {
        const res = await axios.delete('https://damp-haze-3230.fly.dev/api/restaurants/delete/' + name)
        console.log(res)
        navigate(0)
    }

    useEffect(() => {
        let sortedRestaurants
        sortParam === 'low'
            ? sortedRestaurants = [...allRestaurants].sort((a, b) => a.priceRange - b.priceRange)
            : sortedRestaurants = [...allRestaurants].sort((a, b) => b.priceRange - a.priceRange)
        setAllRestaurants(sortedRestaurants)
    }, [sortParam])

    return (
        <>
            <h2>Your Restaurants:</h2>
            <Link className='add' to={'/add-restaurant'}>
                <button>Add your restaurant</button>
            </Link>
            <select name="sortParam" defaultValue={'none'} onChange={(e) => setSortParam(e.target.value)}>
                <option value="none" disabled hidden>Sort by price:</option>
                <option value="low">{`Price (low to high)`}</option>
                <option value="high">{`Price (high to low)`}</option>
            </select>
            <ul>
                {allRestaurants.map((restaurant, id) => {
                    return <li key={id}>
                        {restaurant.name} - {restaurant.cuisine} - {'$'.repeat(restaurant.priceRange) + '   '}
                        <button value={restaurant.name} onClick={(e) => handleDelete(e.target.value)}>delete</button>
                    </li>
                })}
            </ul>
        </>
    )
}
