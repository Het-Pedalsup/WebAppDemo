import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="content">
        <h1>Welcome to MyWebsite</h1>
        <p>
          Your one-stop solution for all your needs. We specialize in delivering
          top-notch services to help you achieve your goals. Whether you're
          looking for innovative solutions, expert advice, or unparalleled
          customer support, we've got you covered!
        </p>
        <a href="#services" className="btn">Explore Services</a>
      </div>

      {/* Extended Content */}
      <div className="extended-content">
        <div className="section">
          <h2>About Us</h2>
          <p>
            At MyWebsite, we pride ourselves on being leaders in the industry. 
            With years of experience, we are committed to delivering exceptional value to our clients.
          </p>
        </div>
        <div className="section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals and businesses through our innovative services. 
            We strive to make a meaningful impact by exceeding expectations and fostering trust.
          </p>
        </div>
        <div className="section">
          <h2>Why Choose Us</h2>
          <ul>
            <li>Expert Team with Proven Track Record</li>
            <li>Custom Solutions Tailored to Your Needs</li>
            <li>24/7 Support and Assistance</li>
            <li>Affordable and Transparent Pricing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
