import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
          </Switch>
        </div>   
      </div>
    </Router>
    
  );
}

export default App;
