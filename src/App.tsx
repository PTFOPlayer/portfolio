import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Topbar from './components/topbar/Topbar'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import Tutorials from './pages/tutorials/Tutorials'
import Career from './pages/career/Career'

function App() {
  return (
    <Router>
      <div className="App-header">
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
