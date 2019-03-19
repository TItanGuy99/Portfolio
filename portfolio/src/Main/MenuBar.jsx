import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

class MenuBar extends Component{

    render(){

        const { props } = this;

        return(
            <div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <nav className="navbar navbar-expand-sm bg-light navbar-light">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">General Info</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Education">Education</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Experience">Experience</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/SideProjects">Side Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Contact">Contact</Link>
                                </li>           
                             </ul>
                        </nav>
                    </div>    
                    <div className="col-2"></div>
                </div>
            </div>
        );
    }
}

export default MenuBar;