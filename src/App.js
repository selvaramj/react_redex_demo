import './App.css';
import { Login } from '../src/components/Login/Login';
import React, { useState } from 'react';
import { Counter } from '../src/components/Counter';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { Form } from '../src/components/Form/Form';
import NavBar from './container/Header/NavBar';
import Overview from './components/Overview';
import { LoadingSign } from '../src/components/Loading';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import FooterSection from '../src/container/Footer';
function App() {
  const isLoading = useSelector((state) => state.user.isLoading);
  const handleLoading = () => {
    return ReactDOM.createPortal(() => {
      <LoadingSign />;
    }, document.getElementById('model'));
  };
  return (
    <>
      {isLoading ? <LoadingSign /> : null}
      <Router>
        <Route exact path='/'>
          <NavBar />
          <Login />
          <FooterSection />
        </Route>
        <Route path='/counter'>
          <Counter />
        </Route>
        <Route path='/register'>
          <Form />
        </Route>
        <Route path='/overview'>
          <Overview />
        </Route>
        <Route path='/loading'>
          <LoadingSign />
        </Route>
      </Router>
    </>
  );
}

export default App;
