import React from 'react'
import Typed from 'react-typed'

const Header = ({scrollToMain}) => {
    return (
        <div className ="header-wrapper">
            <div className="main-info">
                <h1 className="display-3">Hello, I'm Faraz Khan</h1>
                <Typed
                    className="typed-text"
                    strings={["C++ Engineer", "iOS Developer", "Python Developer", "Full Stack Engineer"]}
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