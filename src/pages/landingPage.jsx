import React from "react";
import Header from '../component/header';
import Card from '../component/card';
import CardInfo from "../cardInfo";
import Footer from "../component/footer";

function Landingpage(){

    return(
        <div>
    <Header />
   
   <div className="image1">
    <img  src="/images/R.jfif" alt=""/>
   </div>

   <div className="content container">

    <h2 className="name">Course Description!</h2>

    <h2>
    warikoo is an Internet Entrepreneur based out of India and is one of India’s
    top content creators. He is also a bestselling author and conducts courses
    online as an educator. His aim through his content is to make sure all the
    choices you make in life come from a point of awareness and not ignorance.​
  </h2>
   </div>
<div className="CONTAINER">

<Card 
title={CardInfo[0].title}
img={CardInfo[0].img}
content={CardInfo[0].content}
time={CardInfo[0].time}
 />
<Card 
title={CardInfo[1].title}
img={CardInfo[1].img}
content={CardInfo[1].content}
time={CardInfo[1].time}
 />
<Card 
title={CardInfo[2].title}
img={CardInfo[2].img}
content={CardInfo[2].content}
time={CardInfo[2].time}
 />


</div>

<section className='tall'>
  <h1>Courses</h1>

  <p>
    Super practical courses, with a no-nonsense approach, that are designed to
    help you take <br />
    life decisions from a point of awareness. And not ignorance.
  </p>


  <div>
  <div class="flex-container">
    <div class=" row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card">
          <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n">
          <img src="/images/web-development.webp" class="card-img-top" alt="..." /></a>
          <div class="card-body">
            <h5 class="card-title">WEB DEVELOPMENT</h5>
            <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
              >This will redirect you to our this courses places.</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ">
          <img src="/images/web-development.webp" class="card-img-top" alt="..." /> </a>
          <div class="card-body">
            <h5 class="card-title">
             DATA STRUCTURES
            </h5>
            <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ"
              >This will redirect you to our this courses places.</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg">
          <img  src="/images/web-development.webp"  class="card-img-top" alt="..." /> </a>
          <div class="card-body">
            <h5 class="card-title">
             PYTHON-PROGRAMMING </h5>
            <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg"
              >This will redirect you to our this courses places.</a>
          </div>
        
        </div>
      </div>
    </div>
  </div>
  </div>

</section>

<Footer />



   </div>
    );
}

export default Landingpage;