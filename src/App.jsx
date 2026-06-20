import { useState } from 'react'
import Card from './components/Card'
import profileImg from './assets/profile-illustration.jpg'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [formData, setFormData] = useState({ name: '', email: '' })
const [submitted, setSubmitted] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault()
  setSubmitted(true)
  setFormData({ name: '', email: '' })

  setTimeout(() => {
    setSubmitted(false)
  }, 4000)
}

  const interests = [
    'Claude AI',
    'R Programming',
    'Power BI',
    'Microsoft Excel',
  ]

  const skills = [
    { index: 1, title: 'R Programming', description: 'Used for data visualisation and analysis' },
    { index: 2, title: 'Python Basics', description: 'Mostly hyped programming language' },
    { index: 3, title: 'C++ basics', description: 'One of the oldest programming languages' },
    { index: 4, title: 'SQL basics', description: 'Query used for database management system' },
    { index: 5, title: 'Power BI', description: 'Used to build interactive dashboards and reports' },
    { index: 6, title: 'Microsoft Excel', description: 'Used for data organisation and quick analysis' },
  ]

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>

      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#interests">My Interests</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-text">
          <h1>VINAYA V NAIR</h1>
          <p>I'm a data science student participating in a 5-day frontend bootcamp.</p>
        </div>
        <div className="hero-image-card">
          <img src={profileImg} alt="Vinaya V Nair illustration" />
        </div>
      </section>

      <div className="section-wrap" id="about">
        <div className="section-card">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            My name is Vinaya, data science student in Jain University, Kochi.
            I am passionate about how HTML can integrate with analysis.
          </p>
        </div>
      </div>

      <div className="section-wrap" id="interests">
        <div className="section-card">
          <h2 className="section-title">My Interests</h2>
          <ul className="interests-list">
            {interests.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section-wrap" id="skills">
        <div className="section-card">
          <h2 className="section-title">Skills</h2>
          <div className="card-grid">
            {skills.map(skill => (
              <Card key={skill.index} title={skill.title} description={skill.description} />
            ))}
          </div>
        </div>
      </div>

      <div className="section-wrap" id="contact">
  <div className="section-card">
    <h2 className="section-title">Contact</h2>

    {submitted && (
      <div className="success-banner">
        Thank you, {formData.name || 'there'}! Your message has been received.
        We'll reach out at {formData.email}.
      </div>
    )}

    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Full Name</label>
      <input
        type="text"
        
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />

      <label>Email</label>
      <input
        type="email"
        
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <button type="submit">Submit</button>
    </form>
  </div>
</div>

     
    </div>
  )
}

export default App