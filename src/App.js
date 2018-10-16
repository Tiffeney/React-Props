import React, { Component } from 'react';
import  MovieApi from './api/mockMovie';
import Movie from './components/Movie/Movie';

class App extends Component {

    state = { 
        loading: true, //Default setting
        movies: undefined //Given in Slack
    }
    
    async componentDidMount() {
        // debugger
        let movies = await MovieApi.getAllMovie();
        this.setState({ movies, loading: false });
    }
    render() {
        //destructoring 
        let { loading, movies, cast} = this.state;
        // debugger
        if (loading) return <h1>Loading.</h1> 
        return(
            <div>
                <h1>Now Playing.</h1>
                <div className="movie-container">
                    {movies.map((m, i) => ( //Iterate through Movie array and render the movie for each one. i means index postiion
                        <Movie 
                        key={i}
                        title={m.title}
                        director={m.director}
                        cast={m.cast}/>
                        
                    ))}
                </div>
            </div>
        )
    }
};

export default App