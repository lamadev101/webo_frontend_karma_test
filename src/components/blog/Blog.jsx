import React from 'react'
import './blog.scss'
import { BsArrowRight } from 'react-icons/bs'
import { useStateContext } from '../../utils/StateContext'

const Blog = () => {
  const {dark} = useStateContext()

  return (
    <div className='blog'>
      <h1>Recent Blogs</h1>
      <div className="container">
        <div className="top" style={dark[0]}>
          <div>
            <h6>Best Practices</h6>
            <h3>In design active temper be uneasy. <br /> Thirty for remove plenty regard.</h3>
            <button>Read More <BsArrowRight /></button>
          </div>
          <img src="https://images.pexels.com/photos/6457562/pexels-photo-6457562.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className="bottom">
          <div className="wrapper">
            <div className="card" style={dark[0]}>
              <div>
                <h6>Best Practices</h6>
                <h3>Partiality on or continuing particular principles as. </h3>
              </div>
              <img src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="card" style={dark[0]}>
              <div>
                <h6>Best Practices</h6>
                <h3>Village did removed enjoyed explain</h3>
              </div>
              <img src="https://images.pexels.com/photos/414974/pexels-photo-414974.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="card" style={dark[0]}>
              <div>
                <h6>Best Practices</h6>
                <h3>Wise busy past both park when an ye no. Nay likely her length.</h3>
              </div>
              <img src="https://images.pexels.com/photos/4467737/pexels-photo-4467737.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog