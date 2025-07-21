import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Goals from "./pages/Goals";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GoalForm from "./pages/GoalForm";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-goal" element={<GoalForm />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
