import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  return (
    <Router>
      <div className="min-h-screen text-white relative">
        <ParticlesBackground />
        <Navbar />
        <div className="container mx-auto px-4 relative z-10">
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </Router>
  )
}

export default App
