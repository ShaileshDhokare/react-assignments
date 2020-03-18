import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="#">Assignments</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/tic-tac-toe">Tic-Tac-Toe </Link>
                    <Link className="nav-item nav-link" to="/user-listing-app">
                        User List App
                    </Link>
                    <Link className="nav-item nav-link" to="/todos">
                        Todo App
                    </Link>
                    <Link className="nav-item nav-link" to="/form-validation">Form Demo </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
