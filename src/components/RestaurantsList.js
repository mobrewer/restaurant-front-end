import React, { useEffect, useState } from 'react'

export default function RestaurantsList({ allRestaurants }) {

    const [sortParam, setSortParam] = useState(null)
    const [restaurants, setRestaurants] = useState(allRestaurants)

    useEffect(() => {
        let sortedRestaurants
        sortParam === 'low'
            ? sortedRestaurants = restaurants.sort((a, b) => b.priceRange - a.priceRange)
            : sortedRestaurants = restaurants.sort((a, b) => a.priceRange - b.priceRange)
        setRestaurants(sortedRestaurants)
    }, [sortParam])

    return (
        <>
            <h2>Your Restaurants:</h2>
            <select name="sortParam" onChange={(e) => setSortParam(e.target.value)}>
                <option value="none" selected disabled hidden>Sort by price:</option>
                <option value="low">{`Price (low to high)`}</option>
                <option value="high">{`Price (high to low)`}</option>
            </select>
            <ul>
                {restaurants.map(restaurant => <li>{restaurant.name} - {restaurant.cuisine} - {'$'.repeat(restaurant.priceRange)}</li>)}
            </ul>
        </>
    )
}
