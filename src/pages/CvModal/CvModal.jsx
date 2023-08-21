import React, { useState } from 'react'
import './cv.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import cvpic from '../../Assets/cvpic.png'
import cvpdfg from '../../Assets/cvpdfg.pdf'
import  {Rotate,Bounce,Zoom,Roll}  from 'react-reveal';

function CvModal() {

    const values = [true,];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);


  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

 const handleClose = () => setShow(false);


  return (
    <>

{values.map((v, idx) => (
      <Button key={idx}   class="btn   me-2 mb-2" id='' onClick={() => handleShow(v)}
      style={{background:"none", border:"none", color:"black"}}>
        <b className='bbg abou4' >CV</b>
        {typeof v === 'string' && `below ${v.split('-')[0]}`}
      </Button>
    ))}
    
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Resume Preview</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                  <div className="container">
                      <div className="row">
                        <div className="col-sm-12 text-center">
                            <Zoom>
                              <img src={cvpic} alt="" id='cvimg' />
                            </Zoom>
                            <a href={cvpdfg} download className='btnresume'>Download Resume</a>
                        </div>
                      </div>
                  </div>

              </Modal.Body>
    </Modal>  

    </>
  )
}

export default CvModal