import React from "react";

class App extends React.Component {

  constructor(props){
    // 규칙 : constructor에서 받아온 props 전달값은 super의 parameter 에 지정한다.
    super(props);
    console.log("1. constructor call");
  }
  // 화면이 렌더링된 이후 실행 (=render 함수 실행 후 실행)
  // 사용 빈도가 높다
  componentDidMount(){
    console.log('3. componentDidMount call');
  }

  state = {
    count : 0,
  }

  add = () => {
    this.setState({ count : this.state.count + 1});
  }

  // 화면이 상태 변화가 이뤄진 이후 실행
  componentDidUpdate(){
    console.log('4. componentDidUpdate call');
  }

  render(){
    console.log("2. render call")
    return(
      <div>
        <h1>This is Life Cycle Bisics</h1>
        <button onClick={this.add}>ADD</button>
      </div>
    )
  }
}
export default App;
// = return 역할 
