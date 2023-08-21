import React from 'react'
// import about from '../../Assets/abouttwo.jpg'
import about from '../../Assets/aboutone.jpeg'
import './About.css'
import  {Rotate,Bounce,Zoom,Roll}  from 'react-reveal';



function About() {


  

  return (
    <section id='aboutsection' className='aboutsection'>
      <div className="container aboutmain">
        <div className="row ">
            <Zoom>
          <div className="col-sm-6">
              <img id='aboutimg' src={about} alt="" />
          </div>
            </Zoom>
          <div className="col-sm-6">
            <h4 style={{color:"blue"}} className='abo'><b>About Me</b></h4>
            <h2 className='aboutcon'><b>A dedicated Front-end & Full Stack Developer 
                based in Pakistan 📍</b></h2>
             <p id='aboutmecontent'><small>Hi I am Muhammad Jawad MERN Stack, Reactjs Frontend Development A passionate Website Developer with industrial experience, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, BootStrap, and Asp.Net Core. I excel in designing and maintaining responsive websites that offer a smooth user experience. I really like my job. I use all my experience to create unique Projects that connect brands and companies with their customers. My goal is to boost your business to the highest level. I can help you with your websites for your company</small></p>   
          </div>
        </div>
      </div>
    </section>
  )
}

export default About