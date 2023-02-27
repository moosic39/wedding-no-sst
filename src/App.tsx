import './App.css';
import Upload from './components/Upload';
import { Route, Routes } from 'react-router-dom';
import ViewPhotos from './components/ViewPhotos';

import Notifications from './components/Notifications';

import Time from './components/Time';

function App() {
  return (
    <div className='App'>
      <Time />

      <Notifications />
      <h1>Jenn et Micka</h1>

      <ViewPhotos />
      <Upload />
    </div>
  );
}

export default App;
