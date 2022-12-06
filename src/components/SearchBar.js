import React, { useEffect, useState } from 'react'
import restaurantData from '../restaurants.json'
import { Link } from 'react-router-dom'

export default function SearchBar({allRestaurants}) {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    useEffect(() => {
        search !== '' ?
            setResults(allRestaurants.filter(res => res.name.toLowerCase().startsWith(search.toLowerCase())))
            : setResults([])
    }, [search])
    return (
        <div className='searchbar'>
            <label for='search'>Search for a restaurant:  </label>
            <input type='text' onChange={(e) => { setSearch(e.target.value) }} />
            {results.length > 0
                ? <ul className='results'>
                    {results.map(res => {
                        const url = `/restaurant/${res.name}`
                        return <li><Link to={url}>{res.name}</Link></li>
                    })}
                </ul>
                : <></>}
        </div>
    )
}
