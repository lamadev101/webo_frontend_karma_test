import React, { useState } from 'react'
import './faq.scss'
import {BsChatLeftFill} from 'react-icons/bs'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { questAnswer } from '../../data'
import { useStateContext } from '../../utils/StateContext'

const Faq = () => {
  const [expand, setExpand] = useState(1)
  const {dark} = useStateContext()

  const toggle = (id) => {
    if(expand === id){
      return setExpand(null)
    }
    setExpand(id);
  }

  return (
    <div className='faq'>
      <h1>Fequently <br />asked questions</h1>
      <div className="container">
        <div className="left">
          {questAnswer.map(data=>
              <div className="accrodian" key={data.id} style={dark[1]}>
                <div className="title" onClick={()=> toggle(data.id)}>
                  <h3>{data.question}</h3>
                  {expand === data.id ? <AiOutlineMinus className='icon' /> : <AiOutlinePlus className='icon'/>}
                </div>
                {expand===data.id && <p className='content'>{data.answer}</p>}
              </div>
          )}
        </div>
        <div className="right" style={dark[1]}>
          <BsChatLeftFill className='icon'/>
          <h3>Do you have more questions?</h3>
          <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
          <button>Shoot a Direct Mail</button>
        </div>
      </div>
    </div>
  )
}

export default Faq