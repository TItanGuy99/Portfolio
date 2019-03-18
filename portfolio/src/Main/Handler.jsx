import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Top from './Top';
import Info from './Info'
import Footer from './Footer'
import Education from './Education'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

class Handler extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Top />
                <BrowserRouter>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
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
                                        <Link className="nav-link" to="/OtherProjects">Other Projects</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Contact">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-3"></div>
                    </div>

                    <Switch>
                        <Route path="/" exact={true} component={Info} />
                        <Route path="/Education" component={Education} />
                    </Switch>
                </BrowserRouter>

                <Footer email='luiz.neosnk@gmail.com' linkedin='https://www.linkedin.com/in/luiz-nai/' />
            </div>
        )
    }
}

export default Handler;