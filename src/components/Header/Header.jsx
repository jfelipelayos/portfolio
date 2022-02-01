import React, { useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';


function Header() {
  const [section, setSection] = useState(useLocation().pathname);
  console.log(useLocation().pathname);
  return (
    <header>
      <div className="header container">
        <Link onClick={() => setSection('main')} to='/'>
          <div className="header-logo">
            <h1 className='header-logo-title'>Felipe Layos</h1>
            <h2 className='header-logo-subtitle'>Software Developer</h2>
          </div>
        </Link>
        <nav className='header-nav'>
          <ul className='header-nav-list'>
            <li className='header-nav-list-item'><Link onClick={() => setSection('/blog')} className={section === '/blog' ? 'section-open' : ''} to='/blog'>Blog</Link></li>
            <li className='header-nav-list-item'><Link onClick={() => setSection('/projects')} className={section === '/projects' ? 'section-open' : ''} to='/projects'>Projects</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
