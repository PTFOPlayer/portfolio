import "./App.scss";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Tutorials from "./pages/Tutorials/Tutorials";
import Carrier from "./pages/carrier/Carrier";
function App() {
  return (
    <div className="App-header">
      <Topbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/career" element={<Carrier />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
