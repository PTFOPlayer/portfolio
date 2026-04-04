import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Topbar from './components/topbar/Topbar'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import Tutorials from './pages/tutorials/Tutorials'
import Career from './pages/career/Career'
import NotFound from './pages/not-found/NotFound'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <Router>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="App-header">
        <Topbar />
        <main id="main-content">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/career" element={<Career />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </main>
      </div>
    </Router>
  )
}

export default App
