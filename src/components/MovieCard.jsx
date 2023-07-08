import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
const API_URL = `https://api.themoviedb.org/3/movie/`

export default function MovieCard() {
    const [movie, setMovie] = useState([]);
    const { id } = useParams();

    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovie(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getMovies(`${API_URL}${id}?api_key=${process.env.REACT_APP_API_KEY}`);
    }, [id])
    return (
        <div className="bg-dark text-light">
            <div className="container vh-100">
                <div className="row">
                    <div className="col-md-3 mx-auto">
                        <div className="card" style={{ width: '18rem', backgroundColor: '#000' }}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." height="250" />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
