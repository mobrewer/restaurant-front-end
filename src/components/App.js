import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import '../app.css'

export default function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	)
}
