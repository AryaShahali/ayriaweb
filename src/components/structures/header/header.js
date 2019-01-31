import React from 'react';
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className={'container'}>
                <a className="navbar-brand " href="#">
                    AYRIA-WEB
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navasdasdigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={'/dashboard'} >Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/profile'} >Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/refuel'} >Refuel</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Header;
