import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div >
            <div className="home-container">
                <div className="left-side">
                  <input type="text"  className='search-input'/>
                  <button className='search-btn'>Search</button>
                <h2>ALl player</h2>
                </div>
                <div className="right-side">
                    <div className="cart">
                    <h3>Cart</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;