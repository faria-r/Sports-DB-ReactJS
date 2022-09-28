import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({player,cart,setcart}) => {
  
   const{strCutout,strPlayer,idPlayer,strDescriptionEN} = player;
   const handleAddToCart = ()=>{
    console.log("hi")
   }
    return (
        <div className='card'>
            <img src={strCutout} alt="" />
            <h6>{strPlayer}</h6>
            <p className='players-text'>{strDescriptionEN?.slice(0,60)+ '...'}</p>
            <button className='card-btn'>Detailes</button>
            <button className='card-btn' onClick={handleAddToCart}>Add To Cart</button>
            <button className='card-btn'>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;