import React, { useState } from 'react'
import './Projects.css'
import  {Rotate,Bounce,Zoom,Roll,Flip}  from 'react-reveal';
import AllProjectsData  from './AllProjectsData'
function Projects() {

  
  const [items, Setitem] = useState(AllProjectsData)

  return (
    <div className='bg-light Projectss' id='Projectss'>
        <div className="container mt-5 " style={{padding:"0% 10% 10% 10%"}}>
          <div className="row ">
            <div className="col-sm-12" id='portfolio'>
              <h4 style={{color:"blue"}}><b>PORTFOLIO</b></h4>
              <h2><b>Each project is a unique piece of development 🧩</b></h2>
            </div>
          </div>

            {
              items.map((value)=>{
                return (
                  <div className='bg-white secoundiv mt-5'>
                  <div className="container">
                    <div className="row">
                          <Zoom>
                            <div className="col-sm-6">
                              <div class="cardss p-0">
                                    {/* <img src={p1} alt="" id='pimg'/> */}
                                    <a href={value.livelink} target='_blank'><p className='pimg' style={{backgroundImage:`url('${value.image}')`}}></p></a>
                                </div>
                                
                            </div>
                          </Zoom>
                          <div className="col-sm-6">
                              <h4 className='title text-center mt-5'><b>{value.title}</b></h4>
                              <p className='desc'><small>{value.desc}</small></p>
                              <div style={{display:"flex"}} className='text-center'>
                              <h5 className='lang1'>React</h5>
                              <h5 className='lang2'>BootStrap</h5>
                              <h5 className='lang3'>CSS</h5>
                              </div>
                              <div className='text-center mt-5'>
                                
                                <a href={value.githublink} target='_blank' className='hov'>Code<i className="fa-brands fa-github fa-xl ico" style={{color: "#000000;"}}></i></a>
                                <a href={value.livelink} target='_blank' className='hov'>Live Demo<i class="fa-solid fa-wand-magic-sparkles icoo"></i></a>
                              </div>
                          </div>
                          
                    </div>
                  </div>
                </div>
                )
              })
            }

        </div>
        
    </div>
  )
}

export default Projects