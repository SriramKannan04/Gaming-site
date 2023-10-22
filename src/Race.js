import React from 'react';
import './Race.css';


function Race() {
  return (
  <div className='Race'>
 
 <h1 className='hometitle14'>RACING GAMES</h1>

<div className="homecard2">
  <div className="cardh1">
    <img src="./img/motogp-icon.png" alt="" srcset="" className='imgsize31' />

    <center> 
      <a href="https://www.beamng.com/game/">
        <button className='gamebtn'>Moto GP</button>
      </a> 
    </center>

    <p className='cardcontent'>Feel the speed own the track with MotoGP! Experience adrenaline fueled</p>

    <center><p className='new'>moto GP 2023 </p></center>

  </div>

  <div className="cardh1">
    <img src="./img/boat-icon.png" alt="" srcset="" className='imgsize32' />

    <center> 
      <a href="https://eurotrucksimulator2.com/download.php">
        <button className='gamebtn'>Hatch Race</button>
      </a> 
    </center>

    <p className='cardcontent'>Surge through the waves, triumph on the open seas in Boat Racing and Navigate the waters</p>

    <center><p className='new'>Explore the sea </p></center>

  </div>

  <div className="cardh1">
    <img src="./img/carracing-icon.png" alt="" srcset="" className='imgsize33' />

    <center> 
      <a href="https://www.geo-fs.com/"><button className='gamebtn'>Most Wanted</button></a> 
    </center>

    <p className='cardcontent'>Unleash the velocity, dominate the streets in Need for Speed! one pulse pounding chase at a time</p>

    <center><p className='new'>Need for Speed</p></center>

  </div>

  <div className="cardh1">
    <img src="./img/beachbuggy-icon.png" alt="" srcset="" className='imgsize34' />

    <center> 
      <a href="https://www.ea.com/games/simcity/simcity-4"><button className='gamebtn'>Beach Buggy</button></a> 
    </center>

    <p className='cardcontent'>Get sandy, go wild with Beach Buggy! Ride the waves, own the dunes in style </p>

    <center><p className='new'>Race in the Beach</p></center>

  </div>
</div>

  </div>
  )
}

export default Race;