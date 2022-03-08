import { MovieCard } from "../../Components/movie/moviecard/MovieCard";
import { Pagination } from "../../Components/pagination/Pagination";

export default function Listing():JSX.Element
{
    return(
        <>
            <Pagination/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard/>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard/>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard/>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard/>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard/>
                    </div>
                </div>
            </div>
        </>
    )
}