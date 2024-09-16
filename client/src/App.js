import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";
import fibonacci from "./fibonacci.jpg";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="header-main">
          <div className="image-container">
            <img src={fibonacci} alt="Fibonacci" className="image-fib" />
          </div>
          <h1 className="heading">Fibonacci Calculator</h1>
          <div className="image-container">
            <img src={fibonacci} alt="Fibonacci" className="image-fib" />
          </div>
          </div>
          <div class="routes">
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </div>
          
        </header>

        <Routes>
          <Route path="/" element={<Fib />} />
          <Route path="/otherpage" element={<OtherPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
