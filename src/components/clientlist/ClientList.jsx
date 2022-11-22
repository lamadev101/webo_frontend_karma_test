import React from 'react'
import './clientlist.scss'
import monday from '../../assets/img/client/monday.png'
import morpheus from '../../assets/img/client/morpheus.png'
import oracle from '../../assets/img/client/oracle.png'
import protonet from '../../assets/img/client/protonet.png'
import samsung from '../../assets/img/client/samsung.png'
import segment from '../../assets/img/client/segment.png'
import zeppline from '../../assets/img/client/zeppline.png'
import { useStateContext } from '../../utils/StateContext'

const ClientList = () => {
  const {dark} = useStateContext()

  return (
    <div className='clientList' style={dark[0]}>
      <p>Over 32k+ software  businesses growing with AR Shakir.</p>
      <marquee className="container" direction="right" scrollamount="10">
        <img src={zeppline} alt="" />
        <img src={oracle} alt="" />
        <img src={morpheus} alt="" />
        <img src={samsung} alt="" />
        <img src={monday} alt="" />
        <img src={segment} alt="" />
        <img src={protonet} alt="" />
      </marquee>
    </div>
  )
}

export default ClientList