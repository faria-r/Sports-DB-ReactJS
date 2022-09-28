import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css'

const Home = () => {
    const [search, setsearch] =useState("");
    const [players, setPlayers] = useState([]);
    const [cart,setcart] = useState([])

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => setPlayers(data?.player))
    },[search]);
    // console.log(players);
    
    return (
        <div >
            <div className="home-container">
                <div className="left-side">
                  <input onChange={(e)=>setsearch(e.target.value)} 
                  type="text"  className='search-input'/>
                  <button className='search-btn'>Search</button>
                  <div className="playes-containers">
                    <Players players={players} cart={cart} setcart={setcart}></Players>
                  </div>

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