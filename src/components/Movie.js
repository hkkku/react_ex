import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({title, year, summary, poster, genres}){
  return (
    <div className='movie'>
      <Link to={{pathname: '/movie_detail', state:{year, title, summary, poster, genres}}}>
        {/* div구조로 출력되게 해줌 */}
        <img 
          src={poster} 
          alt={title} 
          onError={(e)=>{
            e.target.onerror = null; 
            e.target.src="https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png";
            }} 
        />
        <div className='movie_data'>
          <h3 className='movie_title'>{title}</h3>
          <h5 className='movie_year'>{year}</h5>
          <ul>
            {/* {genres.map((genre) => (
              // 소괄호로 묶으면 return을 쓰지 않는다.
              <li>{genre}</li>
            ))} */}
            {genres.map((genre, idx) => {
              return <li key = {idx}>{genre}</li>;
            })}
          </ul>
          <p className='movie_summary'>{summary}</p>
        </div>
        {/* movie data 값들 */}
      </Link>
    </div>
  )

}

Movie.propType = {
  // string 검증
  // proptype 의 대문자 - 소문자 작성에 유의한다.
  title : PropTypes.string.isRequired,
  year : PropTypes.number.isRequired,
  summery : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  // genre는 여러 값이 나올 수 있다. => array 
  genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;