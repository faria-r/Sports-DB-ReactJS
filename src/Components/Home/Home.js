import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'

const Home = () => {
    const [search, setsearch] =useState("");
    const [players, setPlayers] = useState([]);
    const [cart,setcart] = useState([]);

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => setPlayers(data?.player))
    },[search]);
    // console.log(players);
    
    const handleDelete = (id)=>{
        const restPlayer = cart.filter(player => player.idPlayer !== id);
        setcart(restPlayer);
        toast("Wow! Deleted from Cart!!");
        Swal.fire("Good Job!","You Deleted The Player", "Success");
    };
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
                    <div className="cart"   data-aos="fade-left"
                                           data-aos-offset="500"
                                           data-aos-duration="8000">
                    <h3>Player's Cart:- {cart.length}</h3>
                    {
                        cart?.map(player =>
                        
                            <div className="cart-info-container">
                                <li>{player.idPlayer}</li>
                                <button onClick={() => handleDelete(player.idPlayer)} className='delete-btn'>Delete</button>
                            </div>
                            )
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;