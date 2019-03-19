import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class SideProjects extends Component{
    render(){
        return(
            <div>
               <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 padding-top">
                        <p className="info-alignment-left">
                            <strong>Titan Game Studios</strong> (2016 - Present)
                        </p>
                        <p className="info-alignment-left">
                            Game developer
                        </p>
                        <p className="info-alignment-left">
                            Titan Game Studios is my side project. Here I develop tools and games for consoles and mobile.
                        </p>
                        <ul className="info-alignment-left">
                           <li>C, C++, C#, ActionScript, HTML5, JavaScript and CSS.</li>
                        </ul>
                        <p className="info-alignment-left">
                            <a target="_blank" href="http://www.titangamestudios.com">http://www.titangamestudios.com</a>
                        </p>
                    </div>
                    <div className="col-2"></div>

                    <div className="col-2"></div>
                    <div className="col-8"> <hr></hr></div>
                    <div className="col-2"></div>

                    <div className="col-2"></div>
                    <div className="col-8 padding-top">
                        <p className="info-alignment-left">
                            <strong>Cidadão Pró-Mundo</strong> (2018 - Present)
                        </p>
                        <p className="info-alignment-left">
                            Volunteer - English teacher
                        </p>
                        <p className="info-alignment-left">
                            Teaching English language for people with limited access to education.
                        </p>
                        <p className="info-alignment-left">
                            <a target="_blank" href="https://www.cidadaopromundo.org/">https://www.cidadaopromundo.org/</a>
                        </p>
                    </div>
                    <div className="col-2"></div>


                    <div className="col-2"></div>

          


                        
                    <div className="col-8 card mb-3">
                        <img className="card-img-top" src="/images/cpm.jpeg"></img>
                        <div className="card-body">
                            <h5 className="card-title info-alignment-left"><strong>Cidadão Pró-Mundo</strong> (2018 - Present)</h5>
                            <p className="card-text info-alignment-left">Teaching English language for people with limited access to education.</p>
                            <p className="info-alignment-left">
                            <a target="_blank" href="https://www.cidadaopromundo.org/">https://www.cidadaopromundo.org/</a>
                        </p>
                        </div>
                    </div>

        

           

            
                    <div className="col-2"></div>


                </div>
            </div>
        );
    }
}

export default SideProjects;