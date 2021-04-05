import React from "react";

class App extends React.Component {
  // class 안에는 무조건 render 가 들어간다.
  //   {/* 요소 중에서 고정 되어 있지만 향후 변경해야 할 요소의 경우 먼저 state로 상태를 지정한다. */}
  // {/* 이후 특별한 조건이 진행되면 상태가 변경되는데 이때 setState로 변경한다. */}
  // {/* state = 정적 / setState = 동적 */}

  state = {
    count : 0,
  }

  // plus(){
  //   console.log('plus');
  //   this.state.count = 1;
       // // 빨간 오류 발생
  // }

  plus = () => {
    // 일반 함수의 경우 class 범위의 this 데이터가 바인딩 되지 않는다. 따라서 부모 class의 this를 함수 안에서 사용해야 할 경우, 화살표 함수 => 를 사용한다.
    // 바인딩(Binding) 이란 프로그램의 어떤 기본 단위가 가질 수 있는 구성요소의 구체적인 값, 성격을 확정하는 것
    // this.state.count = 1;
    this.setState({count : this.state.count + 1});
    // setState 는 객체 형태로 작성한다.
    // 변경된 상태의 state를 계속 받아와 기능 실행
  }
  
  // minus(){
  //   console.log('minus');
  // }
  minus = () => {
    this.setState({count : this.state.count - 1});
  }

  render(){
    return(
      <div>
        <h1>The number is : {this.state.count}</h1>
        {/* api 데이터 가져오는 방식과 유사함 */}
        {/* 바꿔야 할 DOM이 있으면 state로 바꾼 후 그걸 setState 로 바꿔짐  */}
        <button onClick = {this.plus} >PLUS</button>
        <button onClick = {this.minus}>MINUS</button>
        {/* 바깥은 jsx 영역 함수는 js 영역 */}
        {/* this = 부모 어딘가에서 선언된 함수를 그대로 받는다는 의미 */}
      </div>
    )
  }
}
export default App;
// = return 역할 
