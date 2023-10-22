import React from 'react';
import './Sim.css';


function Sim() {
  return (
  <div className='Sim'>

    <h1 className='hometitle13'>SIMULATOR GAMES</h1>

    <div className="homecard2">
      <div className="cardh1">
        <img src="./img/beamng-icon.png" alt="" srcset="" className='imgsize21' />

        <center> 
          <a href="https://www.beamng.com/game/">
            <button className='gamebtn'>Beam NG</button>
          </a> 
        </center>

        <p className='cardcontent'>Rev up the thrill, conquer every bend in Beam NG! Where every crash is a thrilling testament to real physics!</p>

        <center><p className='new'>Crash Testing Game</p></center>

      </div>

      <div className="cardh1">
        <img src="./img/euro-icon.png" alt="" srcset="" className='imgsize22' />

        <center> 
          <a href="https://eurotrucksimulator2.com/download.php">
            <button className='gamebtn'>Euro Truck</button>
          </a> 
        </center>

        <p className='cardcontent'>Navigate Europe's highways with precision in Beam Euro Truck Simulator!</p>

        <center><p className='new'>Truck Simulator</p></center>

      </div>

      <div className="cardh1">
        <img src="./img/flight-icon.png" alt="" srcset="" className='imgsize23' />

        <center> 
          <a href="https://www.geo-fs.com/"><button className='gamebtn'>Flight Sim</button></a> 
        </center>

        <p className='cardcontent'>Reach new heights of realism and adventure with Flight Simulator and  experience the thrill..!</p>

        <center><p className='new'>Flight Simulator</p></center>

      </div>

      <div className="cardh1">
        <img src="./img/simcity-icon.png" alt="" srcset="" className='imgsize24' />

        <center> 
          <a href="https://www.ea.com/games/simcity/simcity-4"><button className='gamebtn'>Sim City </button></a> 
        </center>

        <p className='cardcontent'>Build your dreams shape your world in Sim City! Master the metropolis one virtual brick at a time </p>

        <center><p className='new'>City Life Simulator</p></center>

      </div>
    </div>

  </div>
  )
}

export default Sim;