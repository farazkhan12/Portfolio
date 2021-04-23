import React from 'react'
import background from "../images/header_background.jpg"
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className ="header-wrapper">
            <div className="main-info">
                <h1>Faraz Khan, iOS Mobile Engineer.</h1>
                <Typed
                    className="typed-text"
                    strings={["C++/C", "iOS Development", "FinTech", "Full Stack"]}
                    typedSpeed={40}
                    backSpeed={40}
                    loop
                />
                <a href="#" className="btn-main">View My Portfolio</a>
            </div>
        </div>
        

    )
}

export default Header