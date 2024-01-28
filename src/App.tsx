import "./App.scss";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import Topbar from "./components/topbar/Topbar"
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Tutorials from "./pages/Tutorials/Tutorials";
import Tutorial from "./pages/tutorial/Tutorial";
import Managment from "./pages/managment/Managment";

function App() {
  return (
    <div className="App-header">
      <Router>
        <Topbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/tutorials/:tutorial" element={<Tutorial />} />
          <Route path="/managment" element={<Managment/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
