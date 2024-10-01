import React from "react";
import './Home.css'
import yourImage  from "./myimg.png";
import { useNavigate } from "react-router-dom";
function Home() {

  const navigate = useNavigate();

  const handleNavigation =()=>{
    navigate('/About');
  }

    return (
       <section className="home-section">
        <div className="home-text">
          <h2>HI, I'M AKASH </h2>
          <h1>I'M A<br/> FULL STACK DEVELOPER</h1>
          <p>Creating dynamic and efficient web applications with a full-stack approach.</p>
          <button className="cta-button" onClick={handleNavigation}>View My Profile</button>
        </div>
        <div className="home-image">
          <img src={yourImage} alt="Akash"/>
        </div>
       </section>
      );
}

export default Home;