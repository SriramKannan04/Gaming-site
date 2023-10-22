import React from 'react'
import './Shoot.css';


function Shoot() {
  return (
  <div className='Shoot'>

    <h1 className='hometitle12'>SHOOTING GAMES</h1>

    <div className="homecard1">
      <div className="cardh1">
        <img src="./img/strictwar-icon.png" alt="" srcset="" className='imgsize11' />

        <center> 
          <a href="https://yandex.com/games/app/187413#app-id=187413&catalog-session-uid=catalog-85de1b09-8cee-5944-ad51-99cadbd6d328-1698008167576-2783&rtx-reqid=12928353220484516856&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22tag%22%7D&redir-data=%7B%22block%22%3A%22suggested%22%2C%22block_index%22%3A0%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A1%2C%22first_screen%22%3A1%2C%22page%22%3A%22tag_269%22%2C%22rn%22%3A163543000%2C%22row%22%3A1%2C%22rtx_reqid%22%3A%2212928353220484516856%22%2C%22wrapper%22%3A%22grid-list%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.com%252Fgames%252Ftag%252Fshooter_269%22%7D">
            <button className='gamebtn'>Strick War</button>
          </a> 
        </center>

        <p className='cardcontent'>The Strick War are back for even crazier clashes in the real life and reel life</p>

        <center><p className='new'>Popular Game</p></center>

      </div>

      <div className="cardh1">
        <img src="./img/eternalbattle-icon.png" alt="" srcset="" className='imgsize12' />

        <center> 
          <a href="https://yandex.com/games/app/229820#app-id=229820&catalog-session-uid=catalog-85de1b09-8cee-5944-ad51-99cadbd6d328-1698008712644-47d7&rtx-reqid=12928353220484516856&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22tag%22%7D&redir-data=%7B%22block%22%3A%22suggested%22%2C%22block_index%22%3A0%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A2%2C%22first_screen%22%3A1%2C%22page%22%3A%22tag_269%22%2C%22rn%22%3A926757220%2C%22row%22%3A3%2C%22rtx_reqid%22%3A%2212928353220484516856%22%2C%22wrapper%22%3A%22grid-list%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.com%252Fgames%252Ftag%252Fshooter_269%22%7D">
            <button className='gamebtn'>Eternal Battle</button>
          </a> 
        </center>

        <p className='cardcontent'>Battle with yuor unknown enemy and mock down and live eternally and battle harder</p>

        <center><p className='new'>Hardest Game</p></center>

      </div>

      <div className="cardh1">
        <img src="./img/airportclash-icon.png" alt="" srcset="" className='imgsize13' />

        <center> 
          <a href="https://www.sonsaur.com/drunken-duel-2"><button className='gamebtn'>Airport Clash</button></a> 
        </center>

        <p className='cardcontent'>Conquer the skies, rule the runways in Airport Clash!, control the control tower</p>

        <center><p className='new'>3D Game</p></center>

      </div>

      <div className="cardh1">
        <img src="./img/ragdoll-icon.png" alt="" srcset="" className='imgsize14' />

        <center> 
          <a href="https://yandex.com/games/app/239741"><button className='gamebtn'>Rag Doll </button></a> 
        </center>

        <p className='cardcontent'>Rag Doll is an arcade physics game to drag the ragdoll and do whatever you like with it!</p>

        <center><p className='new'>Ancient Game</p></center>

      </div>
    </div>

  </div>
  )
}

export default Shoot;