import React, { useEffect, useState } from 'react'
import restaurantData from '../restaurants.json'
import { Link } from 'react-router-dom'

export default function SearchBar() {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    useEffect(() => {
        console.log(search)
        setResults(restaurantData.filter(res => res.name.toLowerCase().startsWith(search.toLowerCase())))
        console.log(results)
    }, [search])
    return (
        <div className='searchbar'>
            <label for='search'>Search for a restaurant:</label>
            <input type='text' onChange={(e) => { setSearch(e.target.value) }} />
            <ul>
                {results.map(res => {
                    const 
                })}
            </ul>
        </div>
    )
}
