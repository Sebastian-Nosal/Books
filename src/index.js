import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Styles/style.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App';
import Header from './Header';
import Footer from './Footer';
import Authors from './Authors';
import Genres from './Genres';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/index.html' element={<App/>}/>
        <Route path='/authors' element={<Authors/>}/>
        <Route path='/genres' element={<Genres/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

