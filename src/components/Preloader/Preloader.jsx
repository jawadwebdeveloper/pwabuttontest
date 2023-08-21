import React, { useEffect } from 'react'
import './Preloader.css'
import {preLoaderAnim} from './animations/animation'
function Preloader() {

    useEffect(()=>{
        preLoaderAnim()
    },[])

  return (
    <div className='preloader'>
        <div className="oh">
            <span>Welcome</span>
            <span>To</span>
            <span>My Portfolio</span>
            <span>🎭</span>
        </div>

    </div>
  )
}

export default Preloader