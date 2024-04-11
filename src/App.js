import HALO from 'vanta/src/vanta.halo'
import DOTS from 'vanta/src/vanta.dots'
import Home from '../src/Components/Home'
import Contact from '../src/Components/Contact'
import { Route , Routes }  from 'react-router-dom'
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

  useEffect(()=> {
    DOTS({
      el: "#vanta1",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xf120ff,
      backgroundColor: 0x50505,
      spacing: 32.00,
      showLines: false
    })
  }, [])

  return (
    <>
    <div className="App">
      <Routes>
          <Route path="/">
          <Route index element={<Home/>}></Route>
          <Route path='contact' index element={<Contact/>}></Route>
          </Route>
      </Routes>
      <div className='bg2' id='vanta1'></div>
      </div>
    </>
  );
}

export default App;
