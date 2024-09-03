import React from 'react'
import Logom from "../../images/bird-3206278_1280.webp"
import "./Header.css"

const Header = () => {
  return (
    <nav className="Nav navbar ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img
        src={Logom}
        alt="Logo"
        width={70}
        className="d-inline-block align-text fw-bold"
      />
      TURAL ACADEMY
    </a>
  </div>
</nav>



  )
}

export default Header