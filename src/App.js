import React from 'react';
// import Test from './Components/Test';
import Navbar from './Components/Navbar';
import MobileNavbar from './Components/MobileNavBar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Location from './Components/Location';
import Contact from './Components/Contact';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <MobileNavbar />
  
      <Navbar/>
      <Switch>
      <Route exact path='/'  component={Home} />
      <Route path='/about'  component={About} />
      <Route path='/services'  component={Services} />
      <Route path='/testimonials'  component={Testimonials} />
      <Route path='/location'  component={Location} />
      <Route path='/contact'  component={Contact} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
