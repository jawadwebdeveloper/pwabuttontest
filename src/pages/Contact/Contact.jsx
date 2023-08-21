import React from 'react'
import './Contact.css'
import ReactWhatsapp from 'react-whatsapp';
function Contact() {
  return (
    <div id='contactt' className='contactt'>
      <div className="container mt-5" style={{padding:"0% 10% 10% 10%"}}>
        <div className="row ">
            <div className="col-sm-12" id='portfolio'>
              <h4 style={{color:"blue"}}><b>CONTACT</b></h4>
              <h2><b>Don't be shy! Hit me up! 👇</b></h2>
              <div className='contacticonsset'>
                <a href=""style={{textDecoration:"none",display:"flex"}}>
                  <i class="fa-solid fa-map-location-dot fa-xl location"></i><p className='mt-3 conion'><span style={{fontWeight:"bold"}}>Location</span><br />Pakistan</p>
                  </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mjawad.se@gmail.com" target={"_blank"} style={{textDecoration:"none",display:"flex"}}>
                  <i class="fa-solid fa-envelope-open-text fa-xl locationn"></i><p className='mt-3 conion'><span style={{fontWeight:"bold"}}>Mail</span><br /> mjawad.se@gmail.com</p>
                  </a>
                <ReactWhatsapp number="+923334950384" message="Hi my Name is...." style={{background:"none",color:"blue",border:"none", display:"flex"}} >
                
                   <i class="fa-brands fa-square-whatsapp fa-xl locationon"></i><p className='mt-3 conion'><span style={{fontWeight:"bold"}}>Contact No</span><br /><span id='numbr'>+92 333 4950 384</span></p>
                
                  </ReactWhatsapp>
               
              </div>
             {/* <div className="container mt-5">
              <div className="row conicon">
                <div className="col-sm-3">
                  <i class="fa-solid fa-map-location-dot fa-xl location"></i><p className='mt-3'><span style={{fontWeight:"bold"}}>Location</span><br /> Pakistan</p>
                </div>
                <div className="col-sm-3">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mjawad.se@gmail.com" target={"_blank"} style={{textDecoration:"none"}}><i class="fa-solid fa-envelope-open-text fa-xl locationn"></i><p className='mt-3'><span style={{fontWeight:"bold"}} className='emailo'>Mail</span><br /><span className='emailo'>mjawad.se@gmail.com</span></p>
                  </a>
                </div>
                <div className="col-sm-4">
                  <ReactWhatsapp number="+923334950384" message="Hi my Name is...."  style={{background:"none",color:"blue",border:"none"}}><i class="fa-brands fa-square-whatsapp fa-xl locationon contactno"></i><p className='mt-3 contactno'><span style={{fontWeight:"bold"}} className='contablet'>Contact No.</span><br /><span className='contablet numco'>+92 333 4950 384</span> </p></ReactWhatsapp>
                </div>
              </div>
             </div> */}
            </div>
        </div>
      </div>
      <div className='bg-dark text-center' style={{color:"white", padding:"3% 5% 3% 10%"}}>
          <div className=' footericone'>
              <a href="https://www.linkedin.com/in/mjawad-se/" target='_blank'><i  className="fa-brands fa-linkedin fa-xl linkdinn" style={{color: "white"}}></i></a>
              <a href="https://github.com/jawadwebdeveloper" target='_blank'><i className="fa-brands fa-github fa-xl linkdinn"  style={{color:"white"}}></i></a>
              <a href="https://www.youtube.com/@HashLogic365/videos" target='_blank'><i class="fa-brands fa-youtube fa-xl linkdinn" style={{color: "white"}}></i></a>
              
          </div>
          <small className='fottercontact'><b>Copyright © 2023. All rights reserved | This template is made with <span style={{color:"blue",fontWeight:"200"}}>Jawad.Dev</span></b></small>
          
      </div>
    </div>
  )
}

export default Contact