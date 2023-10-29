import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

export default function HeroSection() {

  const video = document.createElement('video');
if (video.canPlayType('video/mp4')) {
  console.log('MP4 video format is supported');
} else {
  console.log('MP4 video format is not supported');
}
  return (
    <div className='hero-container'>
      {/* this is where we put the video */}
      {/* <video src="/videos/video-2.mp4" autoPlay loop muted controls /> */}
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline' buttonsize='btn--large'>GET STARTED</Button>
        <Button className='btns' buttonStyle='btn--primary' buttonsize='btn--large'>WATCH TRAILER <i className='far fa-play-circle' /></Button>
      </div>
    </div>
  )
} 
