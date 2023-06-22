import { firebaseConfig } from './config/Config';
import { initializeApp } from 'firebase/app'

import './App.css';
import { Test } from './components/Test'; 
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom'; 
import { Contact } from './pages/Contact';

const firebaseapp = initializeApp(firebaseConfig)

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> }  />  
        <Route path="/" element={ <Home/> }  />  
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
