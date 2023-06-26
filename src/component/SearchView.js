import { Link } from "react-router-dom";
import Hero from "./Hero";


const SearchView = ({keyword, searchResult}) => {
    const title = "You Are Searching For: " + keyword;
    const MovieCard = ({movie}) => {
        const movieDetailUrl = `/Movie/${movie.id}`;
        const posterUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
        return(
            <div className="col-lg-2 col-md-3 col-2 mb-3 mt-3">
                <div className="card">
                    <img src={posterUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <Link to={movieDetailUrl} className="btn btn-primary">Show Details</Link>
                    </div>
                </div>
            </div>
        )
    }

    const resultsHtml = searchResult.map((object, index) => {
        return(
            <MovieCard movie={object} key={index} />
        )  
    })
    // console.log(searchResult);

    return(
        <>
            <Hero text={title}/>
            {resultsHtml &&
                <div className="container">
                    <div className="row">
                        {resultsHtml}
                    </div>
                </div>
            }
        </>
    )
}

export default SearchView;