import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import VerifyPage from "./components/VerifyPage";
import ContactsList from "./components/ContactsList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Login to="/api/user/login" />} />
          <Route path="/api/user/register" element={<Register />} />
          <Route
            path="/api/user/verify/:verificationCode"
            element={<VerifyPage />}
          />
          <Route path="/api/contacts/" element={<ContactsList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
