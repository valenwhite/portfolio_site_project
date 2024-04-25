import './App.css';
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;