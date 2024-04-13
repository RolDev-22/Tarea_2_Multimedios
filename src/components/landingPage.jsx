import React from 'react';
import '../style/style.landing.css'
import HeaderLanding from './headerLanding';
import Jumbotron from './jumbotron';
import Cards from './cards';

export default function LandingPage(){
  return (
  <div className='container-Landing'>
    <HeaderLanding/>
    <Jumbotron/>
    <Cards/>
  </div>
  );
};

