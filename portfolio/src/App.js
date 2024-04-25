import './App.css';
import { SideBar } from './components/SiderBar/SideBar';
import { Home } from './components/Home/Home';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Home />
      </Router>
    </div>
  );
}

export default App;