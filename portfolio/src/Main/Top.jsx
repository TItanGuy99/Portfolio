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
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6 padding-top"><h2>{ state.title }</h2></div>
                    <div class="col-3"></div>
                    <div class="col-3"></div>
                    <div class="col-6"> <hr></hr></div>
                    <div class="col-3"></div>
                </div>
            </div>
        );
    }
}

export default Top;