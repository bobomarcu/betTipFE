import React from 'react'
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './componente/home'
import Login from './componente/componenteDefault/login';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} exact></Route>
            <Route path="/log-in" element={<Login/>} exact></Route>

          </Routes>
        </Router>
    </div>
  );
}

export default App;
