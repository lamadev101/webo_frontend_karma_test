import React, { useEffect, useState } from 'react'
import { testimonials } from '../../data'
import './testimonials.scss'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { useStateContext } from '../../utils/StateContext'

const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const { dark } = useStateContext()
  const len = testimonials.length

  const handleClick = (direction) => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : len-1);
    }
    if (direction === 'r') {
      setIndex(index !== len-1 ? index + 1 : 0);
    }
  }
  const winWidth = window.innerWidth;

  useEffect(()=>{
    setTimeout(() =>{
      if(index < len-1) {
        setIndex(prev => prev + 1);
      }
      if(index === len-1) {
        setIndex(0);
      }
    }, 5000)
  })

  return (
    <div className='testimonials dark'>
      <h1>Testimonials</h1>
      <p>We so opinion friends me message as delight. Whole front do of plate heard <br /> oh ought. His defective nor convinced residence own.</p>
      <div className="container">
        <div className="box">
          {testimonials.map(data => {
            return (
              <div className='card' key={data.id} style={{ transform: winWidth <= 477 ? `translateX(${-360 * index}px)` : `translateX(${-620 * index}px)` }}>
                <div className='wrapper' style={dark[1]} >
                  <div className="quoteIcon">
                    <RiDoubleQuotesL className='icon' />
                  </div>
                  <div className="left">
                    <p style={dark[5]}>{data.msg}</p>
                    <h4>- {data.name}, {data.post}</h4>
                  </div>
                  <div className="right">
                    <img src={data.img} alt="" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="arrow">
          <MdKeyboardArrowLeft className="leftArrow" onClick={() => handleClick("l")} />
          {testimonials.map(item => <span key={item.id} className={index === item.id ? 'circle active' : 'circle'} onClick={() => setIndex(item.id)} />)}
          <MdKeyboardArrowRight className="rightArrow" onClick={() => handleClick("r")} />
        </div>
      </div>
    </div>
  )
}

export default Testimonials