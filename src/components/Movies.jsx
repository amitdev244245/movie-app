import { Link } from "react-router-dom";
import { useGlobalContext } from "../context"

export default function Movies() {
    const { movie } = useGlobalContext();
    return (
        <div className="bg-dark text-light">
            <div className="container">
                <div className="row">
                    {
                        movie.map((item, index) => {
                            const { id, title, poster_path } = item;
                            return <div className="col-md-3 g-3" key={index}>
                                <div className="card" style={{ backgroundColor: '#000' }}>
                                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt="..." height="250" />
                                    <div className="card-body">
                                        <p className="card-title fw-bold">{(title.length >= 15) ? `${title.substring(0, 25)} ...` : title}</p>
                                    </div>
                                    <Link to={`../movie/${id}`} className="btn text-warning" style={{ backgroundColor: '#000' }}>Description</Link>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div >
    )
}
