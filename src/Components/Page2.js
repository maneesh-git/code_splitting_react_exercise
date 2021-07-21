import React from 'react';
import logo from '../logo.svg';
import Particles from 'react-particles-js';

const particleParams = {
  particles: {
    number : {
      value : 120,
      density : {
        enable : true,
        value_area : 800
      }
    }
  }
};


const Page2 = ({ onRouteChange }) =>
  <div className="App" style={{ backgroundColor: "#222"}}>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Page 2</h1>
    </header>
    <button onClick={() => onRouteChange('page1')}>Page1</button>
    <button className='disabled'>Page2</button>
    <button onClick={() => onRouteChange('page3')}>Page3</button>
    <Particles params={particleParams} />
  </div>

export default Page2;


/*

Other options for particles.

particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }

*/