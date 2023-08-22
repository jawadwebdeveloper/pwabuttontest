import React, { useState } from 'react'
import './Navbar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CvModal from '../../pages/CvModal/CvModal';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function Navebar() {

//change color after navbar scrooling
const [colorbg , setColorbg]= useState();
const changecolor = ()=>{
  if(window.scrollY>=90)
  {
    setColorbg(true);
  }
  else{
    setColorbg(false)
  }
}
window.addEventListener('scroll', changecolor);
    
// const [isHovering, setIsHovering] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovering(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   };
  return (
    <>
     <Navbar bg=""  expand="lg" fixed="top" className={colorbg ? 'hearder-bg': 'header'} >
        
          <Navbar.Brand href="" style={{color:"black",paddingLeft:"5%",fontSize:"1.8rem",cursor:"pointer"}} id='ok'><a href="/" style={{textDecoration:"none",color:"black"}}><b>Jawad<span style={{color:"blue"}}><b>.</b></span>Dev</b></a></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='navbarr'>
            <Nav className="me-auto"></Nav>
              <Nav  className="me"> 
                {/* <Nav.Link href="" style={{color: isHovering ? 'blue' : 'black'}}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}><b>Home</b>
                </Nav.Link> */}
                <Nav.Link href='#homemain' style={{color:"black"}} ><b className='bb'>Home</b></Nav.Link>
                {/* <Nav.Link as={Link} to={"/"} style={{color:"black"}} ><b className='bb'>Home</b></Nav.Link> */}
                {/* <Nav.Link href='#homemain' style={{color:"black"}}> <b className='bb'>Home</b> </Nav.Link> */}
                <Nav.Link href='#aboutsection' style={{color:"black"}}> <b className='bb'>About</b> </Nav.Link>
                <Nav.Link href='#Projectss' style={{color:"black"}}> <b className='bb'>Project</b> </Nav.Link>
                <CvModal/>
                <Nav.Link href='#contactt' style={{color:"black"}}> <b className='bb'>Contact</b> </Nav.Link>
                {/* <Nav.Link as={Link} to={"/about"} style={{color:"black"}}> <b className='bb'>About</b> </Nav.Link> */}
                {/* <Nav.Link as={Link} to={"/projects"} style={{color:"black"}}> <b className='bb'>Project</b> </Nav.Link> */}
                {/* <Nav.Link as={Link} to={"/contact"} style={{color:"black"}}> <b className='bb'>Contact</b> </Nav.Link> */}
                {/* <Nav.Link as={Link} to={"/skills"} style={{color:"black"}}> <b>Skills</b> </Nav.Link> */}
                {/* <Nav.Link as={Link} to={"/myblog"} style={{color:"black"}}> <b>Blogs</b> </Nav.Link>
                <Nav.Link as={Link} to={"/blogs"} style={{color:"black"}}> <b>MyBlogs</b> </Nav.Link>
                <Nav.Link as={Link} to={"/register"} style={{color:"black"}}> <b>Register</b> </Nav.Link>
                <Nav.Link as={Link} to={"/login"} style={{color:"black"}}> <b>Login</b> </Nav.Link>
                <Nav.Link href="" style={{color:"black"}}> <b>Logout</b> </Nav.Link> */}
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navebar