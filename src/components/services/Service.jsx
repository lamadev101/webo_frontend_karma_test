import React, { useEffect } from 'react'
import { customers } from '../../data'
import './service.scss'
import paymentCard from '../../assets/img/paymentcard.png'
import Quote from '../quote/Quote'
import { BsCheckCircleFill } from 'react-icons/bs'
import Barchart from '../barchart/Barchart'
import { useStateContext } from '../../utils/StateContext'

const Service = () => {
  const { dark } = useStateContext()

  useEffect(() => {
    const options = {
      rootMargin: '0px 0px 0px 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        } else {
          return;
        }
      })
    }, options);


    const left = document.querySelectorAll('.left');
    left.forEach(p => observer.observe(p));

    const right = document.querySelectorAll('.right');
    right.forEach(p => observer.observe(p));

  }, [])

  return (
    <div className='service'>
      <div className="container">
        <div className="top">
          <div className="left">
            {customers.map(data =>
              <div className="card" key={data.id} style={dark[1]}>
                <img src={data.img} alt="" />
                <div>
                  <div className='fund'>+ ${data.fund}</div>
                  <div className='status'>{data.status}</div>
                </div>
              </div>
            )}
          <div className="circles">
            <div className="circle"/>
            <div className="circle"/>
            <div className="circle"/>
          </div>
          </div>
          <div className="right">
            <small>Why Choose Us</small>
            <h1>Track your payments on the go with the best way possible</h1>
            <p>Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. </p>
            <hr />
            <ul>
              <li><BsCheckCircleFill className='icon' />Get Overview at a glance</li>
              <li><BsCheckCircleFill className='icon' />Deoposit funds easily, securlity</li>
              <li><BsCheckCircleFill className='icon' />Get Live Support</li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <small>Why Choose Us</small>
            <h1>Save money with
              proper transaction</h1>
            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.</p>
            <Quote />
            <Barchart />
          </div>
          <div className="right" style={dark[3]}>
            <div >
              <img src={paymentCard} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service