import React from 'react'
import {MdVerified} from 'react-icons/md'
import {BsFillMenuButtonWideFill} from 'react-icons/bs'
import './Nav.css'
import { useState } from 'react'

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);


  return (
    <nav className="navigation">
    <a href="#" className="brand-name">
      DavidBilson <MdVerified className='gold' />
    </a>
    <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
      <BsFillMenuButtonWideFill />
    </button>
    <div
      className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
      <ul>
        <li>
          <a href="#about" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>About</a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Portfolio</a>
        </li>
        <li>
          <a href="#contact" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Nav