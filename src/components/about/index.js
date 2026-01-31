import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with 2+ years of experience building web
              applications. I love solving complex problems and creating intuitive user experiences.
            </p>
            <p>
              My journey in web development started with curiosity and has evolved into a passion
              for creating elegant solutions to real-world problems. I specialize in modern
              JavaScript frameworks and have a strong foundation in backend development.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source projects, learning
              new technologies, or writing technical blogs.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
