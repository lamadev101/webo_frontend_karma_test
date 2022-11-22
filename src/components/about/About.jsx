import React from 'react'
import { useStateContext } from '../../utils/StateContext'
import Quote from '../quote/Quote'
import './about.scss'

const About = () => {
  const {dark} = useStateContext()
  const titles = ["Connect wallets & companies", "Review transactions", "Get income insights"]
    
  return (
    <div className='about'>
      <div className="container">
        <div className="top">
          <div className="left">
            <h1 className='title'>Automated portfolio tracking</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing. <br /> Not thoughts all exercise blessing. </p>
          </div>
          <div className="right">
            <Quote/>
          </div>
        </div>
        <div className="bottom">
          {titles.map((title, index) =>(
            <div className="card" style={dark[1]} key={index}>
            <h2>0{index+1}</h2>
            <div>
              <div className="smallRec" style={dark[4]}/>
              <div className="largeRec"/>
            </div>
            <h1>{title}</h1>
            <p>Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. </p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About