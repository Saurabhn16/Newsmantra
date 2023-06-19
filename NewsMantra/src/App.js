import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
//import {BrowserRouter as Router,Switch,Route,Link,} from "react-router-dom";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
//import {Switch}
export default class App extends Component {
  pageSize=6;
  state={ progress:0}
  setProgress = (progress)=>{
     this.setState({progress:progress})
  }
  render() {
    return (
      <div>
      
       <Navbar/>
        <Routes>
             
          <Route exact path="/"              element={<News setProgress={this.setProgress}key="general"       pageSize={6} country="in" category="general"/>}></Route>
          <Route exact path="/business"      element={<News setProgress={this.setProgress}key="business"      pageSize={6} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress}key="entertainment" pageSize={6} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general"       element={<News setProgress={this.setProgress}key="general"       pageSize={6} country="in" category="general"/>}></Route>
          <Route exact path="/health"        element={<News setProgress={this.setProgress}key="health"        pageSize={6} country="in" category="health"/>}></Route>
          <Route exact path="/science"       element={<News setProgress={this.setProgress}key="science"       pageSize={6} country="in" category="science"/>}></Route>
          <Route exact path="/sports"        element={<News setProgress={this.setProgress}key="sports"        pageSize={6} country="in" category="sports"/>}></Route>
          <Route exact path="/technology"    element={<News setProgress={this.setProgress}key="technology"    pageSize={6} country="in" category="technology"/>}></Route>
        </Routes>
       
      </div>
    )
  }
}

// cddf275ff1b34f12893d37f1223a01f7