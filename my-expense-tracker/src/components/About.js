
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="aboutPage">
      <header className="header">
        <video className="backgroundVideo" autoPlay loop muted>
          <source src="/img/4k.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="slideInDown">About Us</h1>
      </header>
      <main className="main">
        <div className="introMissionContainer">
          <div className="introSectionContainer">
            <section className="introSection zoomIn">
              <h2 className="fadeInLeft">Welcome to Our Journey</h2>
              <p>We are passionate about helping you manage your expenses effectively and efficiently. Our story is one of innovation and dedication to financial well-being.</p>
            </section>
          </div>
          <div className="missionSectionContainer">
            <section className="missionSection zoomIn">
              <h2 className="fadeInRight">Our Mission</h2>
              <p>Our mission is to simplify your financial management with user-friendly tools and insightful data analysis. We strive to make tracking your expenses an easy and rewarding experience.</p>
            </section>
          </div>
        </div>
        <section className="valuesSection fadeInUp">
          <h2 className="scaleIn">Our Values</h2>
          <div className="valuesContent">
            <div className="valueCard flipCard">
              <div className="front cardFace">
                <h3>Transparency</h3>
              </div>
              <div className="back cardFace">
                <p>We believe in clear, honest, and open communication with our users.</p>
              </div>
            </div>
            <div className="valueCard flipCard">
              <div className="front cardFace">
                <h3>Innovation</h3>
              </div>
              <div className="back cardFace">
                <p>Our team is committed to continuous improvement and creative solutions.</p>
              </div>
            </div>
            <div className="valueCard flipCard">
              <div className="front cardFace">
                <h3>Customer Focus</h3>
              </div>
              <div className="back cardFace">
                <p>Your satisfaction and success are our top priorities.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
