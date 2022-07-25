import './Home.css'
import img from "../../Assets/ben.png"
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll'


export default function Home() {
  return (
    <div className='home' id='home'>
      <div className="hleft">
        <div className="texts">
           <h1 className='info-text'>Hi,</h1>
           <h1 className='info-text'>I'am Alper</h1>
           <div className="type"></div>
           <span>         
            <Typewriter 
              options={{
                strings: ['Web Designer', 'Game Developer'],
                autoStart: true,
                loop: true,
              }}
            /></span>

        </div>
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}><div className="contact-button">Contact</div></Link>
      </div>

      <div className="hright">
        <img src={img} alt="me!" className='me'/>
      </div>
    </div>
  )
}
