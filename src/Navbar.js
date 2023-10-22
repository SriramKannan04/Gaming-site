import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom'; 


function Navbar() {
  return (
    <div className='navbar'>
      <div className='logoSize'>
        <Link className='Navcon1' to="/Homepage"><img src="./img/Floric-Odyssey.png" alt="" srcset="" className='logoSize1'/></Link>
      </div>
      <ul>
        <li>
          <Link className='Navcon' to="/Shoot">Shooting Games</Link>
        </li>

        <li>
          <Link className='Navcon' to="/Sim">Simulator Games</Link>
        </li>

        <li>
        <Link className='Navcon' to="/Race">Racing Games</Link>
        </li>

        {/* <li>
          <Link className='Navcon' to="/Adv">Adventure & Survival</Link>
        </li> */}
      </ul>
    </div>
  )
}

export default Navbar;