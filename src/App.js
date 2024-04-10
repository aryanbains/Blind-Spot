import HALO from 'vanta/src/vanta.halo'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(()=> {
    HALO({
      el: '#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      baseColor: 0x0,
      backgroundColor: 0xb0b0c
    })
  }, [])

  return (
    <div className="App">
      <div className="bg" id='vanta'> 
      </div>
      <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='about' index element={<About/>}></Route>
          <Route path='contact' index element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
