//hooks
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Title from './component/Title';
import Menu from './component/Menu';
import Home from './component/Home';
import About from './component/About';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react'

export default function App() {

  const [name,setName]= useState("name");
  const [collegeName,setcollegeName]= useState("svcoledge");

  let change = (newName)=>{
    setName(newName)
  }

    return (
      <div className="App">
        <Title/>
        <h1>{name}</h1>
        <h2>{collegeName}</h2>
        <button onClick={() => change("avi")}>Change</button>
      </div>
    )
}
