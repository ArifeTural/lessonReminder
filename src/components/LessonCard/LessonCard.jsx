import React from 'react'
import{data} from "../../helper/data";
import { Container } from "react-bootstrap";
import "./LessonCard.css"



const LessonCard = () => {
   
    
  return (

 <Container className='Container'>
{data.map((item) => (

<div className="card mb-3 " >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.image} className="img-fluid rounded-start "  alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="card-title"><span>Lesson Name:</span>{item.name}</p>
        <p className="card-text">
        <span> Lesson Hour:</span>{item.hour}
        </p>
        
    
      </div>
    </div>
  </div>
</div>

))}


    
 </Container>
  
  )
}

export default LessonCard