import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';

const Particularmovie = () => { 
    let [trailer, setTrailer] = useState("");
    let location = useLocation();
    let specificMovie = location.state.cards;
    
    async function getTrailers(id) {
        fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=56ae0b492fe2fc5f33267ee4a47b2066`)
            .then(x => x.json())
            .then(x => setTrailer(x.results[0].key)).catch(()=>console.log("Failed to fetch")
            )
    }

    return (
        <div className="movie-container">
            <div className="movie-header">
                <img 
                    src={`https://image.tmdb.org/t/p/original/${specificMovie.backdrop_path}`} 
                    alt={specificMovie.title}
                    className="movie-backdrop"
                />
                <div className="movie-info">
                    <h1 className="movie-title">{specificMovie.title}</h1>
                    <p className="movie-overview">{specificMovie.overview}</p>
                    <b className="movie-rating">Rating: {specificMovie.vote_average}</b>
                    <br />
                    <button className="trailer-button" onClick={() => getTrailers(specificMovie.id)}>
                        Play Trailer
                    </button>
                </div>
            </div>
            <div className="trailer-section">
                {trailer && <YouTube videoId={trailer} className="movie-trailer" />}
            </div>
        </div>
    );
}

export default Particularmovie;
