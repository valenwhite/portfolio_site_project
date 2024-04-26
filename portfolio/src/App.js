import './App.css';
import { SideBar } from './components/SideBar/SideBar';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <div className="App">
      <div class='menuContainer'>
        <SideBar />
      </div>
      <div class='mainContainter'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}