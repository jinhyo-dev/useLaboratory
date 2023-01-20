import React, { useState } from "react"
import "../styles/header.css"
import "../styles/sidebar.css"
import Logo from "../img/logo.png"
import { Link } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import { RiCloseFill } from 'react-icons/ri'

const Header = () => {
  const [isBarOpen, setIsBarOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setIsBarOpen(!isBarOpen)
  }

  return (
    <div className="header-container">
      <div>
        {
          !isBarOpen && (
            <button onClick={handleOpen} className="AiOutlineMenu">
              <AiOutlineMenu/>
            </button>
          )
        }

        <div className={isBarOpen ? "sidebar" : "not-open-sidebar"} id='sidebar'>
          <div className='sidebar-container'>
            <RiCloseFill className='RiCloseFill' onClick={handleOpen}/>

            <div className='menu-list'>
              <Link to="/sign">
                <input
                  type="submit"
                  value="랩실 신청"
                  className='sign-btn'
                />
              </Link>

              <Link to="/list">
                <input
                  type="submit"
                  value="랩실 신청자목록"
                  className='list-btn'
                />
              </Link>

              <Link to="/admin">
                <input
                  type="submit"
                  value="관리자"
                  className='admin'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{textAlign: 'center'}}>
        <Link to="/">
          <img src={Logo} alt="logo" className="logo"/>
        </Link>
      </div>

    </div>
  )
}

export default Header;
