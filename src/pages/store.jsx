import React from "react";
// import {useNavigate} from "react-router-dom";
import Header from '../component/header'
import Footer from '../component/footer'

function Courses(){

  // const navigate = useNavigate();

  // Function to handle the "Enroll" button click
  // const handleEnrollClick = () => {
  //   // Navigate to the "Payment" component
  //   navigate('/Payment');
  // };

    return(
        <div style={{  height:'300vh' , backgroundColor:'#e6ffff'}}> 
        <Header />
 
        <div style={{height:'270vh'}}>

        
     

        <div className="StoreDesign">
        <p style={{fontSize:'70px' , color:'black' , fontWeight:'bold'}}>Tech essentials for campus life</p>
        <span>Score a 10% student discount on select tech, plug in to resources, and find must-have tools for school.* Offers available for a limited time. While supplies last.</span>
        </div>



        <div>
  <div class="flex-containerStore">
    <div class=" row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card">
          <a href="https://www.microsoft.com/en-us/store/b/payment-financing-options?ICID=EDU_CC1R2_Financing_FY24HOL">
          <img src="/images/store1.avif" class="card-img-top" alt="..." /> </a>
          <div class="card-body">
            <h2 class="card-title">Save up to 10% with your student discount*</h2>
            <p>Score the gear you need for school, the holidays, and beyond with savings on select Surface devices, accessories, and more.</p>
          </div>
          
        </div>
      </div>
      <div class="col">
        <div class="card">
          <a href="https://www.microsoft.com/en-us/store/b/surface-deals?icid=EDU_CP2_CTA2_SurfaceDeals">
          <img src="/images/store3.avif" class="card-img-top" alt="..." /> </a>
          <div class="card-body">
            <h2 class="card-title">
            $400 off select Surface Laptop 5
            </h2>
            <p>Study smarter with Surface Laptop 5, the beautiful Windows 11 touchscreen laptop that boasts more multitasking speed and battery life for real life. Now in bold, new colors.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <a href="https://www.microsoft.com/en-us/store/b/special-discount-terms?icid=EDU_CP3_CTA2_BTS24">
          <img  src="/images/store2.avif"  class="card-img-top" alt="..." /> </a>
          <div class="card-body">
            <h2 class="card-title">
            Students and teachers get Microsoft Teams for free </h2>
           <p>Learn how students and teachers from K-12 to collegiate level can use Teams for free with an eligible active school email.</p>
          </div>
        
        </div>
      </div>
    </div>
  </div>
  </div>



  <div>
  <div class="flex-containerStore">
    <div class=" row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card">
          <a href="https://www.microsoft.com/en-us/store/b/payment-financing-options?ICID=EDU_CC1R2_Financing_FY24HOL">
          <img src="/images/store4.avif" class="card-img-top" alt="..." /></a>
          <div class="card-body">
            <h2 class="card-title">Buy now, pay later. As low as 0% APR.</h2>
            <p>Microsoft Store and partners offer you simple, safe ways to pay at checkout—so you can get your holiday shopping done now.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <a href="https://www.microsoft.com/en-us/microsoft-365/college-student-pricing?ICID=EDU_CC2R2_M365_FY24HOL">
          <img src="/images/store5.avif" class="card-img-top" alt="..." /> </a>
          <div class="card-body">
            <h2 class="card-title">
            College students take 50% off Microsoft 365 Personal*
            </h2>
           <p>Get the apps, security, and storage you need to accomplish your goals.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <a href="https://www.microsoft.com/en-us/d/xbox-series-x-forza-horizon-5-bundle/8v5cpws7xvk4?ICID=EDU_CP3R2_XboxSeriesX_BTS24&activetab=pivot:overviewtab">
          <img  src="/images/store6.avif"  class="card-img-top" alt="..." /> </a>
          <div class="card-body">
            <h2 class="card-title">
            Xbox Series X – Forza Horizon 5 Bundle </h2>
           <p>Kickstart your ultimate adventure with the fastest, most powerful Xbox ever and Forza Horizon 5 Premium Edition.

</p>
          </div>
        
        </div>
      </div>
    </div>
  </div>
  </div>


  <div className="StoreDesign">
        <p style={{fontSize:'70px' , color:'bl' , fontWeight:'bold'}}>Gift with confidence</p>
        <span>We offer free 2-3 day shipping, plus extended free returns and extended price protection through Jan 31, 2024.</span>
        </div>



</div>



        
        <Footer />
        </div>

    );
}

export default Courses;