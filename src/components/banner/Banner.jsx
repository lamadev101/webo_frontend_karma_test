import React from 'react'
import './banner.scss'

const Banner = () => {
  return (
    <div className='banner'>
      <div className="container">
        <h1>Discover a better way to manage spendings</h1>
        <button>Get Started Now</button>
        <div className="shape">
          {[0,1,2,3,4,5].map(i=>(
            <div key={i}>
            {[0,1,2,3,4,5].map(j => <div key={j} className="circle" />)}
            </div>
          )) }
        </div>
        <div className="cone1"/>
        <div className="cone2"/>
      </div>
    </div>
  )
}

export default Banner