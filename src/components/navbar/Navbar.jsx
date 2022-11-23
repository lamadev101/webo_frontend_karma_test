import './navbar.scss'
import React, { useEffect, useState } from 'react'
import { BsArrowUpSquareFill,BsMoonStars,BsSun } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import SignIn from '../modal/SignIn'
import { useStateContext } from '../../utils/StateContext'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [showNavItem, setShowNavItem] = useState(false)
  const {setDarkMode, darkMode, dark} = useStateContext();

  const changeNavBg = () => {
    var winHeight = window.scrollY;
    winHeight > 600 ? setToggle(true) : setToggle(false);
  }

  window.addEventListener("scroll", changeNavBg);

  useEffect(()=>{
    setTimeout(() =>{
      setOpenModal(true);
    }, 2000)
  },[])

  return (
    <>
      <div className={toggle ? 'navbar active' : 'navbar'}>
        <div className="container" >
          <div className="left">
            <a href='/'><h2 style={dark[5]}>AR SHAKIR</h2></a>
            {darkMode ? <BsSun onClick={()=>setDarkMode(false)} className="icon" /> : <BsMoonStars onClick={()=>setDarkMode(true)} className="icon" />}
          </div>
          <div className="middle" style={{ display: showNavItem}}>
            <select style={dark[5]}>
              <option value="product" defaultValue={true}>Product</option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
              <option value="product3">Product 3</option>
            </select>
            <select style={dark[5]}>
              <option value="template">Template</option>
              <option value="template1">Template 1</option>
              <option value="template2">Template 2</option>
              <option value="template3">Template 3</option>
            </select>
            <a href="#blog" style={dark[5]}>Blog</a>
            <a href="#pricing" style={dark[5]}>Pricing</a>
          </div>
          <div className="right" style={{ display: showNavItem }}>
            <a href="#signin" onClick={()=>setOpenModal(true)} style={dark[5]}>Sign In</a>
            <button>Start Free</button>
          </div>
          <GiHamburgerMenu className='hamIcon' onClick={() => setShowNavItem(true)} />
        </div>
      </div>
      {toggle && <div className="goToTop" onClick={() => document.documentElement.scrollTop = 0}>
        <BsArrowUpSquareFill className="upArrow" />
      </div>}
      {showNavItem && <div className='toogleNavItem' style={dark[0]}>
        <div className="container">
        <div className="middle">
          <select style={dark[5]}>
            <option value="product" defaultValue={true}>Product</option>
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            <option value="product3">Product 3</option>
          </select>
          <select style={dark[5]}>
            <option value="template">Template</option>
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
            <option value="template3">Template 3</option>
          </select>
          <a href="#blog" style={dark[5]}>Blog</a>
          <a href="#pricing" style={dark[5]}>Pricing</a>
        </div>
        <div className="right">
          <a href="#signin" onClick={()=>setOpenModal(true)} style={dark[5]}>Sign In</a>
          <button>Start Free</button>
        </div>
        </div>
        <button className='closeBtn' onClick={()=>setShowNavItem(false)}>X</button>
      </div>}
      {openModal && <SignIn setOpenModal={setOpenModal} />}
    </>
  )
}

export default Navbar