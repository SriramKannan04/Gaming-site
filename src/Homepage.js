import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className='Home'>

      <div className="homebox"></div>
      <div className="homebox1"></div>
      <div className="homebox2"></div>

      <div className="hometitle">
        <h1 className='hometitle1'>FROLIC ODYSSEY</h1>
        <h3 className='hometitle2'>Amp Up Your Gaming Odyssey, Where Gaming Maestros Join Forces</h3>
      </div>

      <div className="homecard">
        <div className="cardh1">
          <img src="./img/drunken-icon.png" alt="" srcset="" className='imgsize' />

          <center> 
             <a href="https://www.sonsaur.com/drunken-duel-2"><button className='gamebtn'>Drunken Duel 2</button></a> 
          </center>

          <p className='cardcontent'>The stickmen are back for even crazier clashes in the game Drunken Duel 2!</p>

          <center><p className='new'>New Arrival</p></center>
        </div>


        <div className="cardh1">
          <img src="./img/supercar-icon.png" alt="" srcset="" className='imgsize0' />

          <center> 
             <a href="https://www.crazygames.com/game/super-star-car"><button className='gamebtn'>Super Star Car</button></a> 
          </center>

          <p className='cardcontent'> Start your Formula-1 career with a collection of vehicles and circuits over here</p>
      
          <center><p className='new'>New Arrival</p></center>
        </div>

        
      </div>






    </div>
  )
}

export default Homepage;