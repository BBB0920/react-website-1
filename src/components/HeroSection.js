import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

export default function HeroSection() {
  return (
    <div className='hero-container'>
      {/* this is where we put the video */}
      <video src="/videos/video-1.mp4" autoPlay loop muted controls/>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline' buttonsize='btn--large'>GET STARTED</Button>
        <Button className='btns' buttonStyle='btn--primary' buttonsize='btn--large'>WATCH TRAILER <i className='far fa-play-circle' /></Button>
      </div>
    </div>
  )
}
