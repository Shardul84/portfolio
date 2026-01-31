import React from 'react'
import { GitHub, LinkedIn, Mail, Download } from '@mui/icons-material'
import './hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <h1>Hi, I'm a Full Stack Developer</h1>
            <p>
              I build beautiful, responsive web applications using modern technologies like React,
              Node.js, and more. Let's create something amazing together!
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">View My Work</button>
              <button className="btn btn-secondary">
                <Download style={{ marginRight: '8px' }} />
                Download CV
              </button>
            </div>
          </div>

          <div className="hero-socials fade-in-up">
            <p>Follow Me</p>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <GitHub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <LinkedIn />
              </a>
              <a href="mailto:your.email@example.com" className="social-link">
                <Mail />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-illustration float">
          <div className="gradient-circle"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
