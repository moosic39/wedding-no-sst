import './App.css';
import Upload from './components/Upload';
import { Route, Routes } from 'react-router-dom';
import ViewPhotos from './components/ViewPhotos';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className='App'>
      <Countdown />
      <h1>Jenn et Micka</h1>
      <div>coucou</div>
      <ViewPhotos />
      <Upload />
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
