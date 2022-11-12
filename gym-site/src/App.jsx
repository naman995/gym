import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {Box} from "@mui/material";
import Home from "./Pages/Home";
import ExerciseDetails from "./Pages/ExerciseDetails";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Box width="400px" sm={{ width: { xl: "1440px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
        {console.log("app")}
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
