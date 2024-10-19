// src/App.js
import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Login from '../src/components/Login';
import Home from '../src/components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

    return (
      <BrowserRouter>
        <Header/>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home/>}>Home</Route>
            <Route exact path='/login' element={<Login/>}>Login</Route>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    );
}

export default App;
