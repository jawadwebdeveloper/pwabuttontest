import React from 'react'
import './Home.css'
import html from '../../Assets/html.png'
import css from '../../Assets/css.png'
import js from '../../Assets/js.jpg'
import reactjs from '../../Assets/reactjs.png'
import mern from '../../Assets/mern.png'
import dotnet from '../../Assets/aspdotnet.png'
import bootstrap from '../../Assets/bootstrap.png'
import  {Rotate,Bounce,Zoom,Roll,Fade}  from 'react-reveal';
import Loading from './Loading'
import Logo from './Logo'
function Home() {
  return (
    <div id='hoom'>
    <div className='main bg-light container-fluid' id='homemain'>
      <div className="row">
        <div className="col-sm-6 ">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 herocontent">
                  
                <b>
                  <Zoom>
                  <h1 className=' text-center hone'>Front-End Reactjs </h1>
                  
                  </Zoom>
                </b>
                <b>
                  <Zoom>
                    
                  <h1 className='dev  text-center'>Developer 👋🏻</h1>
                  </Zoom>
                </b>
                <p className='text-center mt-3'>Hi I am Muhammad Jawad MERN Stack & Reactjs Frontend Developer <br /> A passionate Website Developer with industrial experience. <br /><b> based in Pakistan 📍</b></p>
                
                <a href="https://www.linkedin.com/in/mjawad-se/" target='_blank'><i  className="fa-brands fa-linkedin fa-xl icone" style={{color: "#000000;"}}></i></a>
                <a href="https://github.com/jawadwebdeveloper" target='_blank'><i className="fa-brands fa-github fa-xl ic" ></i></a>
                <a href="https://www.youtube.com/@HashLogic365/videos" target='_blank'><i class="fa-brands fa-youtube fa-xl ic" style={{color: "#000000;"}}></i></a>
                <Fade left >
                  <div id="boll">
                    {/* <Loading logo={<Logo />} /> */}
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        
          <Zoom>
            <div className="col-sm-6">
                <div className="hero-img"></div>
                
            </div>
          </Zoom>
      </div>
      
      <p className='botomtext'><b>Tech Stack |</b><span className='bgf' ><img className='languageimg' src={html} alt="" /></span>
        <span id='cssbg'><img className='languageimg' src={css} alt="" /></span>
        <span id='cssbg'><img className='languageimg' src={bootstrap} alt="" /></span>
        <span id='cssbg'><img className='languageimg' src={js} alt="" /></span>
        <span id='cssbg'><img className='languageimg' src={reactjs} alt="" /></span>
        <span id='cssbg'><img className='languageimg' src={mern} alt="" /></span>
        <span id='cssbg'><img className='languageimg' src={dotnet} alt="" /></span>
      </p>
    </div>
    
    </div>
    
  )
}

export default Home