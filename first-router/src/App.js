//import logo from './logo.svg';
//import  Logo  from './components/Logo/Logo';
//import  Nav from './components/Nav/Nav';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './components/About/About';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/About">
        <About />
      </Route>
      <Route exact path="Shop">
        <Shop />
      </Route>
      </BrowserRouter>
  );
}

export default App;
