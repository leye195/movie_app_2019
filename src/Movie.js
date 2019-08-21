import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({id,year,title,summary,poster,genres}){
    return (
        <div className="movie">
           <img className="movie__img" src={poster} alt={title} title={title}></img>
           <div className="movie__data">
            <h1 className="movie__title">{title}</h1>
            <h3 className="movie__year">{year}</h3>
            <ul className="movie__genres">
            {genres.map((genre,idx)=>{
                return (<li key={idx} className="genres__genre">{genre}</li>); 
            })}
            </ul>
            <p className="movie__summary">{summary.slice(0,150)}...</p> 
           </div>
        </div>
    );
}
Movie.propTypes={
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;