import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Counter() {
    const [count, setCount] = useState(1)

    const [data, setData] = useState([])

    async function getUserData() {
        const userData = await axios.get('https://randomuser.me/api')
        .then(({data}) => setData(prev => [...prev, ...data.results])
        )
    
        return userData
    }

    // useEffect(() => {
    //     getUserData()
    // }, []);

    return (
        <div className="counter">
            <button className="decrease" onClick={() => setCount(prevCount => prevCount-1)}>-</button>
            <h2>{count}</h2>
            <button className="increase" onClick={() => setCount(prevCount => prevCount+1)}>+</button>
            <button onClick={() => {getUserData()}} >Fetch Data</button>
            <p>
            { data.map (val => (
                <div className="container-fluid">
                <h1>{val.name.first}</h1>
                <img src={val.picture.thumbnail}></img>
                <hr className="my-4"></hr>
                </div>
            ))}
            </p>
        </div>
    )
}

export default Counter
