import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Generate from './Generate';
import Completed from './Completed';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="completed/"
          element={<Completed />}
        ></Route>
        <Route exact path="*" element={<Generate />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
