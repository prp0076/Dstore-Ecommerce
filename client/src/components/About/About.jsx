import React from "react";
import "./About.scss";
import {    MdClose } from "react-icons/md";
import myphoto from "./pushprajphoto1.jpeg"
const About = ({setShowAbout}) => {
  return (
    <>
    
    <section className="about">
    
         <h1>Our Team</h1>
    <div className="row">
     
     
      <div className="column">
         <div className="card">
          <div className="img-container">
            <img src={myphoto} alt=""/>
          </div>
          <h3>Pushpraj Paroha</h3>
          <p>Developer</p>
          <div className="icons">
           
            <a href="https://www.linkedin.com/in/pushpraj-paroha" target={"_blank"}>
              <i className="fab fa-linkedin" ></i>
            </a>
            <a href="http://github.com/prp0076/" target={"_blank"}>
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:prp313918@gmail.com" target={"_blank"}>
              <i className="fas fa-envelope"></i>
            </a>
            <a href="#" alt="">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
         </div>
      </div>
      {/* <!-- Column 3--> */}
      <div className="column">
        <div className="card">
          <div className="img-container">
            <img src={myphoto} alt=""/>
          </div>
          <h3>Sachin Pandey</h3>
          <p>Designer</p>
          <div className="icons">
           
            <a href="https://www.linkedin.com/in/pushpraj-paroha" target={"_blank"}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="http://github.com/prp0076/" target={"_blank"}>
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:prp313918@gmail.com" target={"_blank"}>
              <i className="fas fa-envelope"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <MdClose onClick={()=>(setShowAbout(false))}/>
    </div>
  </section>
  
 
  </>
  );
  
};

export default About;
