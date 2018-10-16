/* Stateless Component  */
/* Receive data and present data = no Methods */

import React from 'react';
import './Movie.css';

const Movie = ({title, director, cast}) => {
    return (
        <div className="movie-block">
            <h2>{title}</h2>
            <h3>{director}</h3>
            <ul>
                {cast.map((c, i) => (
                    <li key={i}>{c}</li>
                ))}                
            </ul>
        </div>
    )
};

export default Movie