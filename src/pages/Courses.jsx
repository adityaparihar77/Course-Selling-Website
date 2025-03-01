import React from "react";
import {useNavigate} from "react-router-dom";
import Header from '../component/header'
import Footer from '../component/footer'
import Video from './smoke.mp4';


function Courses(){

  const navigate = useNavigate();

  // Function to handle the "Enroll" button click
  const handleEnrollClick = () => {
    // Navigate to the "Payment" component
    navigate('/Payment');
  };

    return(
        <div style={{backgroundColor:' #e6ffff' , height:'420vh'}}>
        <Header />
 
        <div style={{height:'400vh'}}>

        
       
        <div className="smoke_bg">
        <video src={Video} autoPlay muted ></video>
        <span className="smoke_effect">
            <span>A</span>
            <span>&</span>
            <span>K</span>
            <span>- </span>
            <span>S</span>
            <span>c</span>
            <span>h</span>
            <span>o</span>
            <span>l</span>
            <span>a</span>
            <span>r</span>
            <span>i</span>
            <span>u</span>
            <span>m</span>
        </span>

        <div className="CoursesDesign">
        <p style={{fontSize:'70px' , color:'blue'}}>COURSES <br/> DESIGNED TO <br/> HELP YOU GROW</p>
        <span>Super practical courses, with a no-nonsense approach, <br />that are designed to help you take life decisions <br/>from a point of awareness. And not ignorance.</span>
        
        </div>

    </div>

  

        <div className="Courses">
        <div class="flex-container">
    <div class=" row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card">
          <img src="/images/web-development.webp" class="card-img-top" alt="..." />
          <div class="card-body">
           <button style={{marginTop:'5%', marginLeft:'18%'}} onClick={handleEnrollClick} >Enroll</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="/images/web-development.webp" class="card-img-top" alt="..." />
          <div class="card-body">
           <button style={{marginTop:'5%', marginLeft:'18%'}} onClick={handleEnrollClick} >Enroll</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="/images/web-development.webp" class="card-img-top" alt="..." />
          <div class="card-body">
           <button style={{marginTop:'5%', marginLeft:'18%'}} onClick={handleEnrollClick} >Enroll</button>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div class="flex-container">
    <div class=" row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
        <div class="card">
          <img src="/images/web-development.webp" class="card-img-top" alt="..." />
          <div class="card-body">
           <button style={{marginTop:'5%', marginLeft:'18%'}} onClick={handleEnrollClick} >Enroll</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="/images/web-development.webp" class="card-img-top" alt="..." />
          <div class="card-body">
           <button style={{marginTop:'5%', marginLeft:'18%'}} onClick={handleEnrollClick} >Enroll</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="/images/web-development.webp" class="card-img-top" alt="..." />
          <div class="card-body">
           <button style={{marginTop:'5%', marginLeft:'18%'}} onClick={handleEnrollClick} >Enroll</button>
          </div>
        </div>
      </div>
    </div>
  </div>

<div>
    <img src="./images/coursesDis.png" alt=""/>
</div>

        </div>
        </div>
        <Footer />
        </div>

    );
}

export default Courses;