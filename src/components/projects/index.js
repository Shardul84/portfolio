import React from 'react'
import { GitHub, Launch } from '@mui/icons-material'
import './projects.css'

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with payment integration and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛍️',
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      image: '✅',
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application using OpenWeather API with beautiful UI and geolocation.',
      tech: ['React', 'REST API', 'Chart.js'],
      image: '🌤️',
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Dashboard for tracking social media metrics and generating insightful reports.',
      tech: ['React', 'Express', 'PostgreSQL', 'Chart.js'],
      image: '📊',
      github: '#',
      live: '#',
    },
    {
      id: 5,
      title: 'Video Streaming Platform',
      description: 'Scalable video streaming service with user authentication and content management.',
      tech: ['React', 'Node.js', 'AWS S3', 'MongoDB'],
      image: '🎬',
      github: '#',
      live: '#',
    },
    {
      id: 6,
      title: 'AI Chat Application',
      description: 'Intelligent chatbot application using machine learning and NLP technologies.',
      tech: ['React', 'Python', 'TensorFlow', 'WebSocket'],
      image: '🤖',
      github: '#',
      live: '#',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card fade-in-up">
              <div className="project-image">{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link">
                  <GitHub /> Code
                </a>
                <a href={project.live} className="project-link">
                  <Launch /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
