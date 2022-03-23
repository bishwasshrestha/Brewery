import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FullCard from './Pages/Fullcard'
import ErrorPage from './Pages/ErrorPage'

ReactDOM.render(  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>      
      <Route path="/FullCard" element={<FullCard/>}>       
        <Route path=':id' element={<FullCard/>}/>        
      </Route>     
      <Route path='*' element={<ErrorPage/>}/>   
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
