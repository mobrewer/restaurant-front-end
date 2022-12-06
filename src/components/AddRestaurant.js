import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddRestaurant() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [veganOptions, setVeganOptions] = useState(true)
    const [takeOut, setTakeOut] = useState(true)
    const [priceRange, setPriceRange] = useState(1)
    const navigate = useNavigate()

    const toBoolean = (str) => {
        return str === 'true' ? true : false
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(JSON.stringify({
            name: name,
            description: description,
            cuisine: cuisine,
            veganOptions: veganOptions,
            takeOut: takeOut,
            priceRange: priceRange
        }))

        try {
            const data = {
                name: name,
                description: description,
                cuisine: cuisine,
                veganOptions: veganOptions,
                takeOut: takeOut,
                priceRange: priceRange
            }
            console.log(data);
            // Send a POST request to the API endpoint with the data
            const response = await axios.post('http://damp-haze-3230.fly.dev/api/restaurants/', data);
            // Handle the success response
            console.log(response.data);
            navigate(-1)
        } catch (error) {
            // Handle any errors that may occur
            console.error(error);
        }
    }
    return (
        <div>
            <h2>Add a restaurant to the guide:</h2>
            <form onSubmit={handleSubmit}>
                <label for="name">Restaurant name:</label>
                <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} />
                <br />
                <label for="description">Description:</label>
                <input type="text" id="description" name="description" onChange={(e) => setDescription(e.target.value)} />
                <br />
                <label for="cuisine">Cuisine:</label>
                <input type="text" id="cuisine" name="cuisine" onChange={(e) => setCuisine(e.target.value)} />
                <br />
                <p>Vegan options:</p>
                <select name="veganOptions" onChange={(e) => setVeganOptions(toBoolean(e.target.value))}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <p>Offers Take-Out:</p>
                <select name="takeOut" onChange={(e) => setTakeOut(toBoolean(e.target.value))}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <p>Price Range:</p>
                <select name="priceRange" onChange={(e) => setPriceRange(parseInt(e.target.value))}>
                    <option value="1">$</option>
                    <option value="2">$$</option>
                    <option value="3">$$$</option>
                    <option value="4">$$$$</option>
                </select>
                <br /><br />
                <input type="submit" />
            </form>
        </div>
    )
}

//https://www.techomoro.com/submit-a-form-data-to-rest-api-in-a-react-app/