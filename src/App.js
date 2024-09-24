
import './index.css';
import pauseDesktop from './images/pattern-divider-desktop.svg';
import pauseMobile from './images/pattern-divider-mobile.svg';
import iconDice from'./images/icon-dice.svg';

import React, { useState } from 'react'

export const App = () => {
  const[advice,setAdvice]=useState("");
    const[count,setCount]=useState(0);
   async function getAdvice(){
const res=await fetch("https://api.adviceslip.com/advice");
const data=await res.json();
setAdvice(data.slip.advice);
setCount((c)=>c+1);

    }

  return (
    <div className='container'>
      <h5>A D V I C E # {count}</h5>
      <p>
         {advice} </p>
         <picture>
          <source media="(min-width:768px)"srcSet={pauseDesktop}/>
          <img src={pauseMobile}alt="img"/>
         </picture>
     
      
      <div className='btn'>
        <button onClick={getAdvice}><img src={iconDice}alt="dice">
        </img></button>
      </div>
      
      
      </div>
  )
}

