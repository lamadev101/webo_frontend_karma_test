import React from 'react'
import './statistics.scss'
import {BsFillStarFill} from 'react-icons/bs'
import {CiUser} from 'react-icons/ci'
import {FcMoneyTransfer} from 'react-icons/fc'
import { useStateContext } from '../../utils/StateContext'

const Statistics = () => {
  const {dark} = useStateContext()

  return (
    <div className='statistics'>
      <div className="container" style={dark[8]}>
        <div className="line" style={dark[4]} />
        <div className='title'>
          <small>We speak with our powerfull statistics</small>
        </div>
        <div>
          <h1>1M+</h1>
          <span>
            <CiUser className='icon'/> Users
          </span>
        </div>
        <div>
          <h1>30K+</h1>
          <span>
            <BsFillStarFill className='icon'/> 5-Stars Reviews
          </span>
        </div>
        <div>
          <h1>$252M</h1>
          <span>
            <FcMoneyTransfer className='icon'/> Transaction
          </span>
        </div>
      </div>
    </div>
  )
}

export default Statistics