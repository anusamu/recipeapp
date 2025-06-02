import React from 'react';
import "../CSS/Aboutus.css"
import Footer from '../components/Footer'; 
import Header from '../components/Header';

const AboutUs = () => {
  return (
    <>
    <Header/>
    <div className="about-us-container">
      

      
      <header className="about-us-header" style={{ marginTop: "0px" }}>
        <h1>Welcome to Recipe Hub</h1>
       
      </header>

    
      <section className="about-us-content">
        <div className="card-container">

          {/* Our Story Card */}
          <div className="card">
            <h3>Our Story</h3>
            <p style={{ textAlign: "justify" }}>
                        
            At Delizia, we believe that cooking should be fun, simple, and accessible to everyone—whether
              you’re a seasoned chef or just starting out in the kitchen. Our app is designed to make finding
              recipes a breeze, no matter how you like to search.
            </p>
          </div>

          {/* Our Vision Card */}
          <div className="card">
            <h3>Search by Recipe Name</h3>
            <p style={{ textAlign: "justify" }}>
            Know exactly what you want to cook? Simply type the recipe name, and we’ll show you step-by-step instructions along with the ingredients you need. Whether it’s a Classic Chicken Curry or Homemade Chocolate Cake, your favorite dishes are just a search away!
            </p>
          </div>

          {/* Our Values Card */}
          <div className="card">
            <h3>Serach by ingredient</h3>
            <p style={{ textAlign: "justify" }}>
            Don’t know what to cook, but have ingredients sitting in your kitchen? Use our Ingredient Search feature! Just select the ingredients you have, and we’ll suggest recipes that you can whip up right now. No more food waste, and no more guessing what to make!
            
            </p>
          </div>

        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-section">
        <h3>Our Mission</h3>
        <p style={{ textAlign: "justify" }}>
        Our mission is to inspire everyone to cook delicious meals without the stress.
        </p>
      </section>

    
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;
