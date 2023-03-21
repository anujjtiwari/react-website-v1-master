import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
// import ChatbotComponent from '.\components\pages\ChatbotComponent.js';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleChange = () => {
    setIsModalOpen(!isModalOpen)
    console.log(isModalOpen)
  }
  return (
    <>
      <Router>
        <Navbar handleChange={handleChange} />
        <Switch>
          <Route path='/' exact render={(props) => <Home {...props} isModalOpen={isModalOpen}/>} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
