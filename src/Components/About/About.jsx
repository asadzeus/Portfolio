import './About.css'
import img from "../../Assets/aboutme.png"

export default function About() {
  return (
    <div className='about' id='about'>
      <div className="hleft">
      <img src={img} alt="me!" className='aboutme'/>
      </div>

      <div className="hright">

        <div className="texts">
           <h1>About Me</h1>
           <h2>I'am Alper</h2>
           <h2>I'am designing websites, coding games about 3 year.</h2>

           <h3>I enjoy taking complex problems then turning them into simple and beatiful interface designs.</h3>

        </div>
      </div>
    </div>
  )
}
