import React from 'react';
import './HeroSection.css';
import '../App.css';
import { Button } from './Button';
function HeroSection() {
    return (
        <div className='hero-container'>
        <div className="video-container">
        <video src="/video/video-1.mp4" type="mp4" autoPlay loop muted/> 
        </div>
         <div className="content">   
         <h1 className="h1">ADVENTURE AWAITS</h1>
         <p className="p">What are you waiting for?</p>
          
       
             <Button 
             className='btns'
             buttonStyle='btn--outline'
             buttonSize='btn--large'
             >
                 GET STARTED
             </Button>
             <Button 
             className='btns'
             buttonStyle='btn--primary'
             buttonSize='btn--large'
             >
                 WATCH TRAILER <i className='fa fa-play-circle'/>
             </Button>
         </div>
        </div>
    )
}

export default HeroSection;
