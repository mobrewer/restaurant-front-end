import React from 'react'
import SearchBar from './SearchBar'

export default function Home() {
    return (
        <div className="homepage">
            <img src='https://www.gotable.com/blog/wp-content/uploads/restaurant-table-with-booths.jpg' alt='restaurant booth' />
            <SearchBar />
        </div>
    )
}
