import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async() => {
        const json = await ( 
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setMovie(json.data.movie);
            setLoading(false);
            console.log(json);
    };
    const url = movie.url;
    useEffect(() => {
        getMovie();
    }, []);
    return (
    <div className={styles.container}>
        {loading ? (
            <div>
                <span>Loaging...</span>
            </div>) : (
        <div>
            <h1 className={styles.title} onClick={()=>{window.open(url)}}>{movie.title}({movie.year})</h1>
            <img className={styles.image} src={movie.medium_cover_image} alt="title" />
            <h3 className={styles.description}>{movie.description_full}</h3>
            <ul className={styles.list}>
                {movie.genres.map((g) => (
                    <li key={g} className={styles.genre}>{g}</li>
                ))}
            </ul>
        </div>
        )}
    </div>
    )
}

export default Detail;