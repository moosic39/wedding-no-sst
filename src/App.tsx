import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Upload from './components/Upload';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>Vite + React</h1>
      <Upload />
    </div>
  );
}

export default App;
