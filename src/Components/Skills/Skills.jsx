import './Skills.css'
import illustratorlogo from "../../Assets/illustratorlogo.png"
import pslogo from "../../Assets/pslogo.png"
import blenderlogo from "../../Assets/blenderlogo.png"
import reactlogo from "../../Assets/reactlogo.png"
import htmlicon from "../../Assets/htmlicon.png"
import cssicon from "../../Assets/cssicon.jpg"
import clogo from "../../Assets/clogo.png"



export default function Skills() {
  return (
    <div className='skills' id='skills'>
       <div className="title-container">
          <h1 className="title">Skills</h1>
        </div>

        <div className="container">

            <div className="row">
              <div className="row-title">Coding</div>

              <div className="images">
                <img src={reactlogo} alt=""  className='app-img'/>
                <img src={htmlicon} alt=""  className='app-img'/>
                <img src={cssicon} alt=""  className='app-img'/>
                <img src={clogo} alt=""  className='app-img'/>
              </div>
            </div>

            <div className="row">
              <div className="row-title">Design</div>

              <div className="images">
                <img src={illustratorlogo} alt=""  className='app-img'/>
                <img src={pslogo} alt=""  className='app-img'/>
              </div>
            </div>
          
            <div className="row">
              <div className="row-title">Modeling</div>

              <div className="images">
                <img src={blenderlogo} alt=""  className='app-img'/>
              </div>
            </div>
        </div>
       
    </div>
  )
}
