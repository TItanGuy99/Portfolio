import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

class MenuBar extends Component{

    constructor(props) 
    {
            super(props);
            this.toggleNavbar = this.toggleNavbar.bind(this);
            this.state = {
            collapsed: true,
        };
    }

    toggleNavbar() {
        this.setState({
        collapsed: !this.state.collapsed,
        });
        }

    render(){

        const { props } = this;
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return(
            <div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 d-none d-sm-block">
                        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
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
      
                    <div className="col-8 d-block d-sm-none">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
                            <div className="container">
                                <a className="navbar-brand" href="#">Menu</a>
                                <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className={`${classOne}`} id="navbarResponsive">
                                    <ul className="navbar-nav ml-auto">
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
                                </div>
                            </div>
                        </nav>
                    </div>  

                    <div className="col-2"></div>
                </div>
            </div>
        );
    }
}

export default MenuBar;