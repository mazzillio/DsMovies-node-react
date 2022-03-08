import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./paginationstyles.scss"
export function Pagination(): JSX.Element {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
                    <IoIosArrowBack className="icon"/>
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false} >
                    <IoIosArrowForward className="icon" />
                </button>
            </div>
        </div>
    )
}