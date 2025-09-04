import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const projects = [
    {
      title: "Project One",
      description: "A responsive web application built with React and modern CSS",
      technologies: ["React", "CSS3", "JavaScript"]
    },
    {
      title: "Project Two", 
      description: "E-commerce platform with user authentication and payment integration",
      technologies: ["Node.js", "MongoDB", "Express"]
    },
    {
      title: "Project Three",
      description: "Mobile app for task management with real-time updates",
      technologies: ["React Native", "Firebase", "Redux"]
    }
  ]

  const skills = [
    "JavaScript", "React", "HTML5", "CSS3", "Node.js", 
    "Python", "GitHub", "Responsive Design", "UI/UX"
  ]

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="nav-brand">
            <h2>Sourabh Kumar</h2>
          </div>
          <ul className={`navlist ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About Us</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Me</a></li>
          </ul>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="">
          <div className="hero-content">
            <h1>Hi, I'm Sourabh Kumar</h1>
            <p className="hero-subtitle">Frontend Developer & UI Enthusiast</p>
            <p className="hero-description">
              I create beautiful, responsive web experiences that users love.
            </p>
            <button className="cta-button">View My Work</button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <h2>About Me</h2>
            <p>
              I'm a passionate frontend developer with experience in creating modern, 
              responsive web applications. I love turning ideas into reality through 
              clean code and thoughtful design.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source, or enjoying outdoor activities.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills">
          <div className="container">
            <h2>Skills & Technologies</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects">
          <div className="container">
            <h2>My Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <h2>Get In Touch</h2>
            <p>I'm always interested in new opportunities and collaborations.</p>
            <div className="contact-info">
              <p>Email: sourabh@example.com</p>
              <p>Phone: +91 9991333723</p>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/sourabh-kumar-158056299/" className="">LinkedIn</a>
              <a href="https://github.com/Sourabhsehal" className="">GitHub</a>
              <a href="https://twitter.com/sourabh_kumar" className="">Twitter</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p> 2024 Sourabh Kumar. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
