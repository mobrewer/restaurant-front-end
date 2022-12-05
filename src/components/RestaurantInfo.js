import React from 'react'
import { useParams } from 'react-router-dom'
import restaurantData from '../restaurants.json'

export default function RestaurantInfo() {
    const { name } = useParams()
    const restaurant = restaurantData.find(restaurant => restaurant.name.toLowerCase() === name.toLowerCase())
    // ^ this is where we will query the database instead of local JSON
    const offers = Object.keys(restaurant).filter(key => restaurant[key] === true)
    const offerDict = { veganOptions: 'Vegan Options', takeOut: 'Take-Out' }
    return (
        <div>
            <h2>{restaurant.name}</h2>
            <h4>Cuisine: {restaurant.cuisine}</h4>
            <h4>Price Range: {'$'.repeat(restaurant.priceRange)}</h4>
            <h4>Offers:</h4>
            <ul>{offers.map(offer => <li key={offer}>{offerDict[offer]}</li>)}</ul>
            <p>{restaurant.description}</p>
        </div>
    )
}
