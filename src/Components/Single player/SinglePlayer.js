import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({player,cart,setcart}) => {
  
   const{strCutout,strPlayer,idPlayer,strDescriptionEN} = player;
   const handleAddToCart = ()=>{
   const info = {
    strCutout,
    strPlayer,
    idPlayer,
    price:115
   };
   if(cart){
    const newPlayer = [...cart,info];
    setcart(newPlayer);
    return;
   }
   else{
    setcart([info])
    return;
   }
};

const handleBookMark = () =>{
    const info = {
    strCutout,
    strPlayer,
    idPlayer,
    quantity:1,
    bookmark:"true"
    };
    // console.log(info);
   const prevBookmark = localStorage.getItem('Bookmark');
   const oldBookmark = JSON.parse(prevBookmark);
   if(oldBookmark) {
    const isExist = oldBookmark.find( player => player.idPlayer === idPlayer);
    if(isExist){
        // alert('already Bookmarked');
        const updatedPrice = parseFloat(isExist.quantity);
        const newUpdatePrice = updatedPrice+ 1;
       isExist.quantity= newUpdatePrice;
        localStorage.setItem("Bookmark",JSON.stringify([oldBookmark]));
        return;
    }
    else{
        localStorage.setItem("Bookmark",JSON.stringify([...oldBookmark,info]));
    }
  
   }
   else{
    localStorage.setItem("Bookmark",JSON.stringify([info]));
    console.log('doesnt exist');
   }

}
    return (
        <div className='card'  data-aos="fade-up"
        data-aos-duration="3000">
            <img src={strCutout} alt="" />
            <h6>{strPlayer}</h6>
            <p className='players-text'>{strDescriptionEN?.slice(0,60)+ '...'}</p>
            <button className='card-btn'>Detailes</button>
            <button className='card-btn' onClick={handleAddToCart}>Add To Cart</button>
            <button className='card-btn' onClick={handleBookMark}>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;