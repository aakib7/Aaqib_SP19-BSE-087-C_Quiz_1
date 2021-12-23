import './App.css';
import {Link,BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './components/Home';
import Recipes from './components/Recipes/Recipes';
import ContactUS from './components/ContactUS';
import Login from './components/view/Login';
import Register from './components/view/Register';


function App() {
  return (
     <BrowserRouter>
    <nav>
      <ul>
        <li className="nav-item">
          <Link to="/" className="item-text">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/recipes" className="item-text">Recipes</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="item-text">Contact US</Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="item-text">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="item-text">Login</Link>
        </li>
      </ul>
    </nav>
      <Routes>
          
          <Route path="/" element={<Recipes />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
