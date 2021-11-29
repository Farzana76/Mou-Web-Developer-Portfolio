import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route path="/home">
                  <Home></Home>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/portfolio">
                 <Portfolio></Portfolio>
              </Route>
              <Route path="/contact">
                  <Contact></Contact>
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
