import React from 'react'
import Announce from "../components/Announce.jsx";
import Navbar from '../components/Navbar.jsx';
import Slider from '../components/Slider.jsx';
import Categories from '../components/Categories.jsx';
import Products from '../components/Products.jsx';
import Newsletter from '../components/Newsletter.jsx';
import Footer from '../components/Footer.jsx';

function Home (){
  return (
    <div >
      <Announce/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home;

