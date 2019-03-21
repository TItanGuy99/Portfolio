import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Top extends Component{

    constructor(props){
        super(props);

        this.state = {
            title: 'Luiz Nai - Portfolio'
        }
    }

    render(){
        
        const {state} = this;

        return(
            <div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 padding-top"><h2>{ state.title }</h2></div>
                    <div className="col-2"></div>
                    <div className="col-2"></div>
                    <div className="col-8"> <hr></hr></div>
                    <div className="col-2"></div>
                </div>
            </div>
        );
    }
}

export default Top;