import React from "react";
// import axios from 'axios';
// import Movie from './components/Movie';
import About from "./routes/About";
import './App.css'
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import {HashRouter, Route} from 'react-router-dom';
import Navigation from './components/Navigation';


function App(){
  // 함수형이므로 render 필요 x
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie_detail" component={Detail} />
      {/* 네비게이션 역할을 한다 */}
    </HashRouter>
  )
}

export default App;