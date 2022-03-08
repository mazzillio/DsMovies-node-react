import { MovieStars } from "../moviestars/MovieStars"
import "./moviescorestyles.scss"


export function MovieScore(): JSX.Element {
    const count=13
    const score=3.5
    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    )
}