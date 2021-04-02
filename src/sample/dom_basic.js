import React, {Component} from "react";
import './App.css';
import Header from './components/Header';
//여러 개의 component를 사용하기 위해 Component는 {} 로 감싼다.

function Greeting(){
// class Greeting extends Component {
  // render 함수 내부에 return 값은 반드시 하나의 태그로 감싸져야 한다.
  // component로 복잡한 기능 구현 가능
  // class에 들어가는 요소 = member : 함수 형태로 된 것을 method라고 한다
  // render() {
    return (
      <div>
        <p>Hello Again React</p>
      </div>
    )
  }
// }
// 1. 함수 형태 2. class 형태로 사용 가능하다 
// 함수 이름은 대문자로 시작해야함
// function Header(){


function App() {
  return (
    // 계속 바뀔 부분
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
// = return 역할 
