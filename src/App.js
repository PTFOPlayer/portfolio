import "./App.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.tsx"
import Topbar from "./components/topbar/Topbar.tsx"

function App() {
  return (
    <div className="App-header">
      <Router>
        <Topbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
