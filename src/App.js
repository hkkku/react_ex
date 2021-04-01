import React, { Component } from "react";

class Greeting extends Component {
  // render 함수 내부에 return 값은 반드시 하나의 태그로 감싸져야 한다.
  render() {
    return (
      <div>
        <p>Hello Again React</p>
      </div>
    )
  }
}
function App() {
  return (
    <div className="App">
      <p>Hello React</p>
      <Greeting />
    </div>
  );
}

export default App;
