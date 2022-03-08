import "./moviestarsstyles.scss"
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'
export function MovieStars(): JSX.Element {
    return (
        <div className="dsmovie-stars-container">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
        </div>

    )
}