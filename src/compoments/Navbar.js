
import PropTypes from 'prop-types'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid ">
      <Link className="navbar-brand" to="/home" >{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            DarkModes
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" onClick={props.greenDarkMode} href="#">GreenDarkMode</a></li>
            <li><a className="dropdown-item" onClick={props.blueDarkMode} href="#">BlueDarkMode</a></li>
            <li><a className="dropdown-item" onClick={props.redDarkMode} href="#">RedDarkMode</a></li>
          </ul>
        </li>
        </ul>
        
       
        

        <div className={`form-check form-switch text-${props.modeText}`}>
            <input className="form-check-input" onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
            <label className="form-check-label " htmlFor="flexSwitchCheckChecked">{props.mode}Mode</label>
          </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title:PropTypes.string}