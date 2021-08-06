import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShopDetail = ({match}) => {
    const [item, setItem] = useState({})
    const [itemImg, setItemImg] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchForniteData()
    },[])

    const fetchForniteData = async () => {
        const response = await axios.get(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        console.log(response.data.data)
        setItem(await response.data.data.item)
        setItemImg(await response.data.data.item.images.icon)
    }

    return (
        <div className='container text-center shop'>
        <div class="card align-items-center cyan darken-4">
            <img className='w-50 h-50 py-2' src={itemImg}></img>
            <div className="card-body">
                <h5 className="card-title text-white">{item.name}</h5>
                <p className="card-sub-title text-white">{item.description}</p>
                <p className="card-text text-white">{item.cost} {item.obtained_type}</p>
                <p className="card-text text-white">{item.rarity}</p>
                <Link to='/shop' className="btn btn-default btn-lg">Go Back</Link>
            </div>
        </div>
        </div>
    )
}

export default ShopDetail
