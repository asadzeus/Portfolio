import './Projects.css'
import Typewriter from 'typewriter-effect';
import Project from '../Project/Project';
import arkaplansızlogo from "../../Assets/arkaplansızlogo.png"
import vatandaşlıkbelgesi from "../../Assets/vatandaşlıkbelgesi.png"
import img from "../../Assets/ben.png"


export default function Home() {
  return (
    <div className='projects' id='projects'>

         <div className="title-container">
          <h1 className="title">Projects</h1>
        </div>

        <div className="website-wrapper">
            <div className="website-container"><Project link="https://vixygames.netlify.app/" name="Vixy Games" img={arkaplansızlogo}/></div>
            <div className="website-container"><Project link="https://airportpatrol.netlify.app/" name="Airport Patrol" img={vatandaşlıkbelgesi}/></div>
        </div>
    </div>
  )
}
