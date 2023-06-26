import React from 'react'
import Announce from "../components/Announce.jsx";
import Navbar from '../components/Navbar.jsx';
import Slider from '../components/Slider.jsx';

function Home (){
  return (
    <div >
      <Announce/>
      <Navbar/>
      <Slider/>
    </div>
  )
}

export default Home;

