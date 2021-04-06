import React from "react";
import axios from 'axios';
import Movie from './components/Movie';
import './App.css'

class App extends React.Component {

  state = {
    // 바뀌어야 하는 내용을 state 에 미리 지정한다 
    isLoading : true,
    movies : [],
  }

  getMovies = async () => {
    // async = 요청 
    const {
      data : {
        data : {movies},
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating'); 
    console.log(movies);
    // 데이터가 다 들어오면 true => false 
    this.setState({isLoading : false, movies : movies});
    // es6 에서는 변수와 데이터의 이름이 같으면 1개만 써주기도 가능하다.
  }
  componentDidMount(){
    // setTimeout(function(){
    //   this.setState({ isLoading : false });
    // }, 3000); this 바인딩 실패

    // setTimeout(() => {
    //   this.setState({ isLoading : false });
    // }, 3000);

    // axios 들어오는 위치 
    // 화면이 rendering 된 이후 실행된다.
    this.getMovies();
  }
  render(){
    // const isLoading = this.state.isLoading;
    // react 핵심기능
    const { isLoading, movies } = this.state;
    // this의 범위 = component 
    // this를 지정 => 변수는 나열
    return(
      // 최상위 태그는 비워도 상관x <></>

     (<section className='container'>
        {/* 상황 연산자 true 일 때 실행 : false 일 때 실행 */}
        {/* class 대신 className 을 사용한다. */}
        {isLoading ? (
          <div className='loader'>Loading . . .</div>
        ) : ( 
          <div className='movies'>
            {movies.map((movie) => (
              <Movie 
                key = {movie.id} 
                title = {movie.title} 
                year = {movie.year} 
                genres = {movie.genres}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
              />
            ))}
          </div>
          )}
      </section>
      )
    );
  }
}
export default App;
// = return 역할 
