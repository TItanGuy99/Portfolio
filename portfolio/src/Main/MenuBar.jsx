import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class MenuBar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                
                <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                </nav>
            </div>
        )
    }
}

export default MenuBar;