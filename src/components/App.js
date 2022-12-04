import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import RestaurantInfo from './RestaurantInfo'
import RestaurantsList from './RestaurantsList'
import AddRestaurant from './AddRestaurant'
import '../app.css'

export default function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/all' element={<RestaurantsList />} />
				<Route path='/restaurant/:name' element={<RestaurantInfo />} />
				<Route path='/add-restaurant' element={<AddRestaurant />} />
			</Routes>
		</div>
	)
}