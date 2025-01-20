import React, { useState } from 'react'
import CommonModal from './CommonModal'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    const handleNavToggle = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <>
            <div className='navbar-parent'>
                <div className='logoSection d-flex justify-content-between container py-2 align-items-center'>
                    <Link to=''>
                        <div className='navbar-logo'>
                            <img src="/assets/images/jayanilogo.jpg" alt="" />
                        </div>
                    </Link>

                    <div>
                        <p>For Appointments</p>
                        <div className='d-flex gap-2 align-items-center'>
                            <i className="fa-brands fa-whatsapp" style={{ color: "green" }}></i>
                            <a href="tel:+91-9137464646">+91 - 9137464646</a>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <button className="navbar-toggler" type="button" onClick={handleNavToggle} aria-controls="navbarSupportedContent" aria-expanded={isNavOpen} aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to='' onClick={handleNavToggle}>HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/about' onClick={handleNavToggle}>ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/services' onClick={handleNavToggle}>OUR SERVICES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/patient-education' onClick={handleNavToggle}>PATIENT EDUCATION</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/contact-us' onClick={handleNavToggle}>CONTACT</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-outline-success bg-success text-white">SECOND OPINION</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

            {/* ----------------- Contact Form Modal ------------ */}
            <CommonModal />
        </>
    )
}

export default Header;
