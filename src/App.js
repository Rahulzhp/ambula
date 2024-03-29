import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Service from './Components/Service';
import Menu from "./Components/Menu"
import Footer from './Components/Footer';
import Allroute from './Components/Allroute';
import Cart from './Components/Cart';
import Login from './Components/Login';

import { useLocation } from 'react-router-dom';
import Contact from './Components/Contact';


function App() {
  const location = useLocation();
  const hideComponents = location.pathname.includes('/login') || location.pathname.includes('/cart') || location.pathname.includes('/todo');

  return (
    <div className="App">
      <Navbar />
      {!hideComponents && (
        <>
          <Home />
          <Menu />
          <Service />
          <Contact />
        </>
      )}
      <Allroute />
      <Footer />

    </div>
  );
}

export default App;



