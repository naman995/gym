import React from 'react';
import './App.css';
import {Route ,Routes} from "react-router-dom";
import Box from '@mui/material';

function App() {
  return <Box width ="400px">
     Navbar
     <Routes>
      <Route path='/' element={<Home/>}>
      <Route path='/exercise/:id' element={<ExerciseDetail/>}>

      </Route>
     </Routes>
  </Box>;
}

export default App;