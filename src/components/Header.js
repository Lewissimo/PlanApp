import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import EventNoteIcon from '@mui/icons-material/EventNote';
import './Header.scss';
import { useAuth } from '../firebase-config/AuthContext';
const Header = () => {
  const auth = useAuth();


  return (
    <div className='header-box'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">

            <Link className="navbar-brand" to={`/`}><EventNoteIcon className='logo-icon' /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
            <ul className="navbar-nav col-12 col-lg-6">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Strona Główna</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/messages"><div>Wiadomości<span className='amount-of-mess'></span></div></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/friends">Szukaj znajomych</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/setting">Ustawienia</Link>
                </li>
                <li className="nav-item">
                  <Link onClick={auth.logOut} className="nav-link" to="/login">Wyloguj</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Header
