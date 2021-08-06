import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

const Shop = () => {

    const [fetchData, setFetchData] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchForniteData()
    },[])

    const fetchForniteData = async () => {
        const response = await axios.get('https://fortnite-api.theapinetwork.com/store/get');
        console.log(response.data.data)
        setFetchData(await response.data.data)
    }

    return (
        <div className="container-fluid shop">
            <h1>Shop Page</h1>
            {
                fetchData.map(obj => (
                    <h1 key={obj.itemId}>
                        <Link to={`/shop/${obj.itemId}`}>{obj.item.name}</Link>
                    </h1>
                ))
            }
        </div>
    )
}

export default Shop
