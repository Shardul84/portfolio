import React, { useState } from 'react'
import { Brightness7, Brightness4, Menu, Close } from '@mui/icons-material'
import './header.css'

const Header = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <div className="header-container">
        <div className="logo">Portfolio</div>

        <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
          <a onClick={() => handleScroll('hero')} className="nav-link">
            Home
          </a>
          <a onClick={() => handleScroll('about')} className="nav-link">
            About
          </a>
          <a onClick={() => handleScroll('projects')} className="nav-link">
            Projects
          </a>
          <a onClick={() => handleScroll('skills')} className="nav-link">
            Skills
          </a>
          <a onClick={() => handleScroll('contact')} className="nav-link">
            Contact
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle theme"
          >
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </button>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header 