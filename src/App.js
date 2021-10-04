import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom"
import AOS from 'aos';
import './App.css';
import Home from './components/Home';

function App() {
  useEffect(()=>{
    AOS.init({
      duration: 2000
    });
  },[])
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
