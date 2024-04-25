import './App.css';
import { SideBar } from './components/SideBar/SideBar';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div class='menuContainer'>
        <SideBar />
      </div>
      <div class='mainContainter'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;