import React from 'react';
import PropTypes from 'prop-types';

function Movie({title, year, rating}){
  return (
    <div>
      <h4>{title}</h4>
      <h4>{year}</h4>
      <em>{rating}</em>
    </div>
  )

}

Movie.propType = {
  // string 검증
  // proptype 의 대문자 - 소문자 작성에 유의한다.
  title : PropTypes.string.isRequired,
  year : PropTypes.number.isRequired,
  rating : PropTypes.number.isRequired,
}

export default Movie;