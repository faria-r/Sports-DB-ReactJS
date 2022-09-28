import React from 'react';
import SinglePlayer from '../Single player/SinglePlayer';
import './Players.css'

const Players = ({players,setcart,cart}) => {
    // console.log(players);
    return (
        <div>
           <div className="card-container">
           {
             players.map((player) =>(<SinglePlayer 
                key={player.idPlayer}
                 player={player}
                 cart={cart}
                 setcart={setcart}
                 ></SinglePlayer>))
            }
          
           </div>
        </div>
    );
};

export default Players;