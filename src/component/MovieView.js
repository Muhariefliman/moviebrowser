import Hero from "./Hero";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

const MovieView = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fa2e05195b4a34dc09b9a2ec49377fae&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                setMovie(data);
                setIsLoading(false);
            }, 2000);
        })
    }, [id]);

    function isOverview(){
        if(movie.overview){
            return <p className="lead">{movie.overview}</p>
        }else{
            return <p className="lead">No overview available</p>
        }
    }


    function renderMovie(){
        if(isLoading){
            return <Hero text="Loading..." />
        }
        if(movie){
            const posterUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
            const backdropUrl = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
            return(
                <>
                    <Hero text={movie.title} backdrop={backdropUrl}/>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterUrl} alt={movie.title} className="img-fluid shadow rounded" />
                            </div>
                            <div className="col-md-9">
                                <h2>{movie.original_title}</h2>
                                {isOverview()}
                            </div>

                        </div>
                    </div>
                </>
            ) 
        }
    }

    
    return renderMovie();
}

export default MovieView;