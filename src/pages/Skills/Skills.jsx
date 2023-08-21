import React from 'react'
import "./Skill.css"
import {BsPatchCheckFill} from 'react-icons/bs'
import  {Rotate,Bounce,Zoom,Roll}  from 'react-reveal';
function Skills() {
  return (
    <section id='experience' className='experience'>
      
      <h4 style={{color:"blue"}} className='text-center'><b>SKILLS</b></h4>
      <div className="container experience__container">
          <div className="experience__frontend">
                <Bounce left>
              <h3>Frontend Development</h3>
              <div className="experience__content">
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4 className='hfour'>HTML</h4>
                      <small className='text-dark'>Experienced</small>
                    </div>
                </article>
                {/* </Bounce> */}
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4 className='hfour'>CSS</h4>
                      <small className='text-dark'>Experienced</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4 className='hfour'>JavaScript</h4>
                      <small className='text-dark'>Intermmediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4 className='hfour'>BootStrap</h4>
                      <small className='text-dark'>Experienced</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4 className='hfour'>Nextjs</h4>
                      <small className='text-dark'>Basic</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4 className='hfour'>Reactjs</h4>
                      <small className='text-dark'>Intermmediate</small>
                    </div>
                </article>
              
              </div>
          </Bounce> 
          </div>

          <div className="experience__backend">
          <Bounce right>
          <h3>Backend Development</h3>
              <div className="experience__content">
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4 className='hfour'>NoseJs</h4>
                      <small className='text-dark'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4 className='hfour'>MongoDB</h4>
                      <small className='text-dark'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4 className='hfour'>Asp.Net</h4>
                      <small className='text-dark'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4 className='hfour'>MySQL</h4>
                      <small className='text-dark'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4 className='hfour'>Express</h4>
                      <small className='text-dark'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4 className='hfour'>AjaxApi</h4>
                      <small className='text-dark'>Intermediate</small>
                    </div>
                </article>

              </div>


          </Bounce> 
          </div>

      </div>
    </section>
  )
}

export default Skills