import React from "react";


function footer(){
    return(
        <div>
            <footer className="footer">
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.facebook.com/abhishek_dahiwal_07">
          <img  style={{width:'100px'}} className="social_img" src="./images/facebook1.png" alt=""  />
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/abhishek-dahiwal-0bb557224">
      <img style={{width:'100px'}} className="social_img"  src="./images/linkedin1.png" alt="" />
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.twitter/abhishek_dahiwal">
      <img  style={{width:'100px'}} className="social_img"  src="./images/twitter1.png" alt="" />
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/abhishek_dahiwal_07">
      <img style={{width:'100px'}} className="social_img"  src="./images/instagram1.png" alt="" />
        </a></li>
    </ul>
    <ul className="menu">
      <li className="menu__item"><a className="menu__link" href="./pages/landingPage">Home</a></li>
      <li className="menu__item"><a className="menu__link" href="./pages/landingPage">About</a></li>
      <li className="menu__item"><a className="menu__link" href="./pages/landingPage">Services</a></li>
      <li className="menu__item"><a className="menu__link" href="./pages/landingPage">Team</a></li>
      <li className="menu__item"><a className="menu__link" href="./pages/contact">Contact</a></li>

    </ul>
    <p>&copy;2023 Abhi kus | All Rights Reserved</p>
  </footer>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    );
}

export default footer;