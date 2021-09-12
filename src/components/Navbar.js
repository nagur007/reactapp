import React, {useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link, NavLink} from 'react-router-dom';

function Navbar() {
        const [show, setshow] = useState(false);
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Exploring Infinities</NavLink>
                    <button onClick = {()=>setshow(!show)} className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                        <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" exact>Additon</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Subtraction" exact>Subtraction</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Multiplication" exact>Multiplication</NavLink>
                            </li>
                        </ul>
                        <form className="form-inline my-2 d-flex my-lg-0">
                            <Link className="btn btn-success my-sm-0 " to="/Registerstudent" type="signup">Register Student</Link> 
                            <Link className="btn btn-success m-2 my-sm-0" to="/Login" type="logIn">Login Student</Link>
                            <Link className="btn btn-success my-sm-0" to="/Fordemo" type="logIn">For Demo</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar