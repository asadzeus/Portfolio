import './Contact.css'
import emailjs from "emailjs-com"
import { Instagram, YouTube, LinkedIn } from '@mui/icons-material';
import { useState } from 'react';


const Contact = () => {

   const [name,SetName] = useState("");
   const [email,SetEmail] = useState("");
   const [msg,SetMsg] = useState("");

  function sendEmail(e){
    e.preventDefault();

    if(name.trim().length === 0 || email.trim().length === 0 || msg.trim().length === 0){
      alert("Please fill the empty blanks!");
    }
    else
    {
       emailjs.sendForm("service_whorrbw","template_p6gxrmb", e.target, "ts33rksjH-fXCyJCt")
       .then(res=>{
        console.log(res);
       }).catch(err =>  console.log(err));
    }

  }

  return (

    <div className='contact'>
        
        <div className="cleft">
          <div className="ctitle">Links</div>
         
            <div className="clink-container">
       
              <div className="clink">
                <a href="https://www.instagram.com/alper_ertugrul1/">
                <div className="ccircle">
                <Instagram className='cicon' sx={{ fontSize: 60 }}/></div>
                </a>
                <div className='clink-name'>alper_ertugrul1</div>
              </div>

              <div className="clink">
                <a href="https://www.youtube.com/channel/UCPQrHrX96xhsyXcTdJpN39w">
                <div className="ccircle">
                <YouTube  sx={{ fontSize: 60 }}/></div>
                </a>
                <div className='clink-name'>Vixy Games</div>
              </div>

              <div className="clink">
                <a href="https://www.linkedin.com/in/alper-ertugrul-97b03b1b8/">
                <div className="ccircle">
                <LinkedIn  sx={{ fontSize: 60 }}/></div>
                </a>
                <div className='clink-name'>alper ertugrul</div>
              </div>

            </div>

        </div>

        <div className="cright">
        <form onSubmit={sendEmail} className="form">
              <div className="form-title">Contact</div>
              <div className="input-container">
              <input type="text" placeholder='Name:' className='input' maxLength={15} name='Name' onChange={(e) => SetName(e.target.value)}/>
              </div>
              <div className="input-container">
              <input type="email" placeholder='E mail:' className='input' maxLength={30} name='Email' onChange={(e) => SetEmail(e.target.value)}/>
              </div>
              <div className="input-container">
              <input type="text" placeholder='Content:' className='input text' name='Message' onChange={(e) => SetMsg(e.target.value)}/>
              </div>
              <button className='sendbtn' type="submit" value="Send">Send</button>
        </form>
        </div>
    </div>
  )
}

export default Contact