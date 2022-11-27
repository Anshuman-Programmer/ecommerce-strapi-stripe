import React from 'react'
import { BsChevronDown } from "react-icons/bs"
import { Link } from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai" 
import { AiOutlineShoppingCart } from "react-icons/ai" 
import "./_navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <span>USD</span>
            <BsChevronDown/>
          </div>
          <div className="item">
            <Link className='link' to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to="/">ANSHUSTORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link' to="/">Home</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">About</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">Stores</Link>
          </div>
          <div className="icons">
            <AiOutlineSearch size={"1.5rem"}/>
            <div className="cartIcon">
              <AiOutlineShoppingCart size={"1.5rem"}/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </nav> 
  )
}

export default Navbar