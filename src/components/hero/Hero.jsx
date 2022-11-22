import React from 'react'
import './hero.scss'
import { BsCheckCircleFill, BsPlayCircleFill } from 'react-icons/bs'
import {IoLogoUsd} from 'react-icons/io'
import card from '../../assets/img/paymentcard.png'
import card1 from '../../assets/img/paymentcard1.png'
import { useStateContext } from '../../utils/StateContext'

const Hero = () => {
  const {dark} = useStateContext()
  const text = "your one stop banking solution";

  return (
    <div className='hero' style={dark[7]}>
      <div className="container">
        <div className="left">
          <h1>Managing freelance payments has never been easier</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. </p>
          <div>
            <button>Get Started</button>
            <span className='play'><BsPlayCircleFill className='playIcon' />See How it Works</span>
          </div>
          <div className='checkMark'>
            <span>
              <BsCheckCircleFill className='icon' />
              <small>Free Register</small>
            </span>
            <span>
              <BsCheckCircleFill className='icon' />
              <small>Great Service</small>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="circle">
            <div className="logo"><IoLogoUsd/></div>
            <div className="text">
              <p>
                {text.split("").map((char, i)=> (
                  <span key={i} style={{transform: `rotate(${i * 11}deg)`}}>{char}</span>
                ))}
              </p>
            </div>
          </div>
          <div className='imgs'>
            <img src={card} alt="" />
            <img src={card1} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero