import React from 'react'
import Navbar from "./Navbar";
import bannerbackground from "../Assets/home-banner-background.png";
import bannerimage from "../Assets/home-banner-image.png";
import {FiArrowRight} from "react-icons/fi";
const Home = () => {
  return (
    <div classname="home-container">
        <Navbar/>
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={bannerbackground} alt=""/>
          </div>
          <div className="home-text-section">
            <div className="home-image-container">
              <img src={bannerimage} alt=""/>
            </div>
            <h1 className="primary-heading">
                Your Favorite Food Delivered Hot & Fresh
            </h1>
            <p className="primary-text">
              Text here..text here.. text here..text here
            </p>
            <button className="secondary-button">
              Order Now <FiArrowRight/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Home