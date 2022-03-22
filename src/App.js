import { ReactDOM } from 'react-dom';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import Card from './Components/Card'
import FullCard from './Pages/Fullcard'
import ErrorPage from './Pages/ErrorPage'


function App() {


  return (   
    <div className='App'>
      <div className='home'>
        <Home/>
      </div>
      <nav>        
        <Link to='/FullCard'>FullCard</Link>
        <Link to='/ErrorPage'>Error Page</Link> 
      </nav>   
      <Outlet/>
    </div>
  );
}

export default App;
