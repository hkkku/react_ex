import React from "react";
import axios from 'axios';
import Movie from './components/Movie';

class App extends React.Component {

  state = {
    isLoading : true,
    movies : [],
  }

  getMovies = async () => {
    const {
      data : {
        data : {movies},
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json'); 
    console.log(movies);
    this.setState({isLoading : false, movies : movies});
  }
  componentDidMount(){
    // setTimeout(function(){
    //   this.setState({ isLoading : false });
    // }, 3000); this 바인딩 실패

    // setTimeout(() => {
    //   this.setState({ isLoading : false });
    // }, 3000);

    // axios 들어오는 위치
    this.getMovies();
  }
  render(){
    // const isLoading = this.state.isLoading;
    const { isLoading, movies } = this.state;
    return(
      // 최상위 태그는 비워도 상관x <></>

      
     (<div>
        {/* 상황 연산자 true 일 때 실행 : false 일 때 실행 */}
        {isLoading ? 'Loading . . .' : movies.map((movie) => {
          console.log(movie);
          return <Movie key = {movie.id} title = {movie.title} year = {movie.year} rating = {movie.rating}/>;
        })}
      </div>)
    );
  }
}
export default App;
// = return 역할 
