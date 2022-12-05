import React, { useEffect, useState } from 'react'
import restaurantData from '../restaurants.json'
import { Link } from 'react-router-dom'

export default function SearchBar() {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    useEffect(() => {
        console.log(search)
        search !== '' ?
            setResults(restaurantData.filter(res => res.name.toLowerCase().startsWith(search.toLowerCase())))
            : setResults([])
        console.log(results)
    }, [search])
    return (
        <div className='searchbar'>
            <label for='search'>Search for a restaurant:  </label>
            <input type='text' onChange={(e) => { setSearch(e.target.value) }} />
            <ul>
                {results.length > 0 ?
                    results.map(res => {
                        const url = `/restaurant/${res.name}`
                        return <li><Link to={url}>{res.name}</Link></li>
                    })
                    : <></>
                }
            </ul>
        </div>
    )
}
