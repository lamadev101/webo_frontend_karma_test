import React from 'react'
import './quote.scss'
import {RiDoubleQuotesL} from 'react-icons/ri'
import { useStateContext } from '../../utils/StateContext'

const Quote = () => {
  const {dark} = useStateContext()

  return (
    <div className='quote' style={dark[0]}>
      <div className="quoteIcon">
        <RiDoubleQuotesL className='icon'/>
      </div>
      <p>Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen.</p>
      <strong>- Mike Taylor, Web Designer</strong>
    </div>
  )
}

export default Quote