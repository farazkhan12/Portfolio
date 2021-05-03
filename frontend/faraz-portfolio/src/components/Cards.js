import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import TicTacToe from './TicTacToe'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out my Experience!</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <TicTacToe />
                        <CardItem 
                        src='images/swift-logo.png'
                        text="Implemented “add to merchant” feature under Capital One digital card. This allowed customers to add their cards to services such
                        as Amazon, Apple Wallet, and PayPal (Swift)"
                        label="Swift Development"
                        path='/iOS'
                        />
                        <CardItem 
                        src='images/react-logo.png'
                        text="Created personal portfolio single-page app that you are interacting with curently (React)"
                        label="React Development"
                        path='/React'
                        />
                    </ul>
                    <ul className="cards-items">
                        <CardItem 
                        src='images/cpp-logo.png'
                        text="Implemented UDP/TFTP sentry for Boeing that sniffed for ARINC 615-A loader packets in order to initiate Reboot sequence using
                        JSON messaging framework (C++)"
                        label="C++ Development"
                        path='/C++'
                        />
                        <CardItem 
                        src='images/rxswift-logo.png'
                        text="Created modal view for adding Capital One cards to Amazon.com. This allowed the user to interact with the parent screen and
                        modal at the same time. (RxSwift)"
                        label="RxSwift Development"
                        path='/iOS'
                        />
                        <CardItem 
                        src='images/python-logo.png'
                        text="Developed “Grocery Store helper” app using beacons that mapped locations of user inputted products (Python)"
                        label="Python Development"
                        path='/Python'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
