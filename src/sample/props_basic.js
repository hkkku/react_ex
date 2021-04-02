import React from "react";
import './App.css';

import PropTypes from 'prop-types';
//여러 개의 component를 사용하기 위해 Component는 {} 로 감싼다.

function Movie({title, rating, pic}){
  console.log(typeof rating);
  return (
    <div>
      <h3>My Favorite Movie is {title}</h3>
      <p>★ : {rating}</p>
      <img src ={pic} alt = {title} />
    </div>
  )
}

// 1. 함수 형태 2. class 형태로 사용 가능하다 
// 함수 이름은 대문자로 시작해야함
// function Header(){

const arr = ['a', 'b', 'c', 'd'];
arr.map(function(elm){
  console.log(elm);
  return 0;
});

arr.map((elm)=> {
  console.log(elm);
  return 0;
});
const myMovies = [
  {
    id: 1,
    title : "기생충",
    rating : 5,
    image : 'https://upload.wikimedia.org/wikipedia/ko/6/60/%EA%B8%B0%EC%83%9D%EC%B6%A9_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
  },
  {
    id: 2,
    title : "아가씨",
    rating : 4.2,
    image : 'https://img.huffingtonpost.com/asset/5d7196bc240000ee177698ab.jpeg?ops=scalefit_630_noupscale',
  },
  {
    id: 3,
    title : "박쥐",
    rating : 3.8,
    image : 'https://upload.wikimedia.org/wikipedia/ko/thumb/e/ed/Thirst.jpg/220px-Thirst.jpg',
  },
  {
    id: 4,
    title : "윤희에게",
    rating : 3.5,
    image : 'https://upload.wikimedia.org/wikipedia/ko/f/f5/%EC%9C%A4%ED%9D%AC%EC%97%90%EA%B2%8C_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
  }
]

function App() {
  return (
    // 계속 바뀔 부분
    <div className="App">
      <h2>My Movie</h2>
      {myMovies.map((movies) => (
        //{} 를 사용하지 않는다.
        <Movie 
          title= {movies.title} 
          rating={movies.rating} 
          pic ={movies.image}
          key ={movies.id}
        />
      ))}


    </div>
  );
}

Movie.propTypes = {
  title:PropTypes.string.isRequired,
  pic:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired,
}

export default App;
// = return 역할 
