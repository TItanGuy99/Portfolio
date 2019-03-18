import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Footer extends Component{

    static defaultProps = {
        email: {},
        linkedin: {}
    }

    constructor(props){
        super(props);
    }

    render(){

        const { props } = this;

        return(
            <div>
                <div class="row">


                    <div class="col-3"></div>
                    <div class="col-6"> <hr></hr></div>
                    <div class="col-3"></div>

                    <div class="col-3"></div>
                    <div class="col-6 ">
                        <p>Linkedin: <a target="_blank" href={ props.linkedin }> { props.linkedin }</a></p>
                        <p>E-mail: <a href="mailto: { props.email } "> { props.email } </a></p>
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>
        );
    }
}

export default Footer;