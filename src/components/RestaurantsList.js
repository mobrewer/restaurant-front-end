import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function RestaurantsList({setAllRestaurants, allRestaurants }) {

    const [sortParam, setSortParam] = useState(null)

    useEffect(() => {
        let sortedRestaurants
        sortParam === 'low'
            ? sortedRestaurants = allRestaurants.sort((a, b) => b.priceRange - a.priceRange)
            : sortedRestaurants = allRestaurants.sort((a, b) => a.priceRange - b.priceRange)
        setAllRestaurants(sortedRestaurants)
    }, [sortParam])

    return (
        <>
            <h2>Your Restaurants:</h2>
            <Link className='add' to={'/add-restaurant'}>
            <button>Add your restaurant</button>
            </Link>
            <select name="sortParam" onChange={(e) => setSortParam(e.target.value)}>
                <option value="none" selected disabled hidden>Sort by price:</option>
                <option value="low">{`Price (low to high)`}</option>
                <option value="high">{`Price (high to low)`}</option>
            </select>
            <ul>
                {allRestaurants.map(restaurant => <li>{restaurant.name} - {restaurant.cuisine} - {'$'.repeat(restaurant.priceRange)}</li>)}
            </ul>
        </>
    )
}
