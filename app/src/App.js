import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Title from './component/Title';
import Menu from './component/Menu';
import Home from './component/Home';
import About from './component/About';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'

export default class App extends Component {

  constructor(){

    super();
    this.state={users:[]}
  }

  componentWillMount()
  {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => this.setState({users:json}))
  }


  render() {
    return (
      <div className="App">
        <Title/>
      </div>
    )
  }
}
