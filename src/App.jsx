import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Posting } from './pages/Posting';

function App() {
  return (
    <div className="bg-black min-h-screen w-full bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('image.png')" }}>
      <Posting />
    </div>
  );
}

export default App;
