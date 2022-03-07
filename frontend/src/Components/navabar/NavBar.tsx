import { BsGithub } from "react-icons/bs";
import "./navbarstyles.scss"
export function Navbar(): JSX.Element {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/mazzillio">
                        <div className="dsmovie-contat-container">
                            <BsGithub />
                            <p className="dsmovie-contat-link">{'/mazzillio'}</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}