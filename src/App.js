import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Title from './component/Title';
import Menu from './component/Menu';
import Home from './component/Home';
import About from './component/About';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">

      <Title/>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
