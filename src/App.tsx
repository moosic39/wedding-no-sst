import { useState } from 'react';
import './App.css';
import Upload from './components/Upload';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <h1>Jenn et Micka</h1>
      <div>coucou</div>
      <Upload />
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
