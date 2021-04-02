// index 외 파일명은 대문자로 시작한다

import React, {Component} from 'react';

class Header extends Component {
  // class 내부는 반드시 render 함수로 감싼다.
  // class 내부의 member 함수는 function 키워드를 사용해서는 안 된다.
  render(){
    // render의 값인 JSX는 태그가 하나일 때 ()없이 작성,
    // 자식 태그를 포함할 때에는 ()룰 사용한다.

    return(
      // return 내에 최상위 태그(모든 태그를 감싸는 태그)는 1개만 존재해야 한다
      <header>
        <h1>This is Header Section</h1>
        <section>
          <div>Box</div>
        </section>
        <footer>
          copyright all hkkku
        </footer>
      </header>
    )
  }
}

export default Header;