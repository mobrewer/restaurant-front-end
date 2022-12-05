import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import RestaurantInfo from './RestaurantInfo'
import RestaurantsList from './RestaurantsList'
import AddRestaurant from './AddRestaurant'
import About from './About'
import Navbar from './Navbar'
import '../app.css'

export default function App() {
	return (
		<div className='app'>
			<div className='header'>
				<h1>Restaurant App</h1>
				<Navbar />
			</div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/all' element={<RestaurantsList />} />
				<Route path='/restaurant/:name' element={<RestaurantInfo />} />
				<Route path='/add-restaurant' element={<AddRestaurant />} />
			</Routes>
		</div>
	)
}
