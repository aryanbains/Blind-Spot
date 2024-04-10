import HALO from 'vanta/src/vanta.halo'
import Home from '././Assets/Components/Home'
import Contact from '././Assets/Components/Contact'
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

  return (
    <div className="App">
      <Routes>
          <Route path="/">
          <Route index element={<Home/>}></Route>
          <Route path='contact' index element={<Contact/>}></Route>
          </Route>
      </Routes>
      <div className='bg' id='vanta'></div>
    </div>
  );
}

export default App;
