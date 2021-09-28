//import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './homepage.js';
import viewDestinations from './viewDestinations.js';
import Navbar from '../components/navbar.js';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/destinations" component={viewDestinations} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;


