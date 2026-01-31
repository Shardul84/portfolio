import React from 'react'
import './skills.css'

const Skills = () => {
  const skillsCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Material-UI', 'Redux'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL', 'Firebase'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Docker', 'REST APIs'],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillsCategories.map((category, idx) => (
            <div key={idx} className="skill-category fade-in-up">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{
                          width: `${85 + Math.random() * 15}%`,
                          animation: `fillBar 0.8s ease-out ${skillIdx * 0.1}s both`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
