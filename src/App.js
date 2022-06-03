/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import './styles/main.css';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Navbar from './components/Navbar';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/Calculator" element={<Calculator />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
