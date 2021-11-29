import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import ExercisesList from "./pages/ExerciseList";
import EditExercise from "./pages/EditExercise";
import CreateExercise from "./pages/CreateExercise";
import CreateUser from "./pages/CreateUser";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateUser />} />
        <Route path="/" exact element={<ExercisesList />} />
      </Routes>
    </Router>
  );
};

export default App;
