import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import RestaurantInfo from './RestaurantInfo'
import RestaurantsList from './RestaurantsList'
import AddRestaurant from './AddRestaurant'
import About from './About'
import Navbar from './Navbar'
import axios from 'axios'
import '../app.css'

export default function App() {
	const [allRestaurants, setAllRestaurants] = useState([])
	useEffect(() => {
		axios.get('http://localhost:4000/api/restaurants')
			.then((res) => {
				console.log(res.data)
				setAllRestaurants(res.data)
			}).catch((error) => {
				if (error.response) {
					console.log(error.response.data)
				}
			})
	}, [])

	return (
		<div className='app'>
			<div className='header'>
				<h1 className='title'>Restaurant App</h1>
				<Navbar />
			</div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/all' element={<RestaurantsList allRestaurants={allRestaurants} />} />
				<Route path='/restaurant/:name' element={<RestaurantInfo />} />
				<Route path='/add-restaurant' element={<AddRestaurant />} />
			</Routes>
		</div>
	)
}
