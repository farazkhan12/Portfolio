import React from 'react'
import Typed from 'react-typed'

const Header = ({scrollToMain}) => {
    return (
        <div className ="header-wrapper">
            <div className="main-info">
                <h1>Faraz Khan, iOS Mobile Engineer.</h1>
                <Typed
                    className="typed-text"
                    strings={["C++/C", "iOS Development", "FinTech", "Full Stack"]}
                    typeSpeed={50}
                    backSpeed={40}
                    loop
                />
                <button className="btn-main" onClick={scrollToMain}>View My Portfolio</button>
            </div>
        </div>
    )
}

export default Header