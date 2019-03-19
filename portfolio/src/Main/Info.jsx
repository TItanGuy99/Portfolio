import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Info extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 padding-top">
                    
                    <p className="info-alignment-left">Web Developer with over 7 years of experience. I work with front and back-end, I have also experience with DotNet, gamification, mobile and agile methodologies.</p>
                    <p className="info-alignment-left">I'm very passionate in learning new technologies. At the moment I'm focusing on React.JS, React Native, Redux and Node.js.</p>
                    <p className="info-alignment-left"><strong>Education:</strong></p>
                    <ul className="info-alignment-left">
                        <li>
                            Post Degree - Game Development
                        </li>
                        <li>
                            Graduation - Computer Science
                        </li>
                    </ul>
                    <p className="info-alignment-left"><strong>Languages:</strong></p>
                    <ul className="info-alignment-left">
                        <li>
                            Portuguese - Native
                        </li>
                        <li>
                            English - Fluent
                        </li>
                        <li>
                            Japanese - Basic
                        </li>
                    </ul>
                    <p className="info-alignment-left"><strong>Previous experiences:</strong></p>
                    <ul className="info-alignment-left">
                        <li>
                            IBM Brasil
                        </li>
                        <li>
                            Reactor Digital
                        </li>
                        <li>
                            Agencia Vision Comunicação
                        </li>
                        <li>
                            Uninove
                        </li>
                        <li>
                            HZ Administração e Participações LTDA - Grupo Memorial
                        </li>
                    </ul>
                    <p className="info-alignment-left"><strong>Programming skills:</strong></p>
                    <p className="info-alignment-left">JavaScript (HTML, CSS), TypeScript, ActionScript 2 & 3, PHP, C#, C++ and C.</p>
                    <p className="info-alignment-left"><strong>Frameworks:</strong></p>
                    <p className="info-alignment-left">React.js, React Native, Redux, Vue.JS, Node.Js, GreenSock and JQuery.</p>
                    <p className="info-alignment-left"><strong>DataBases:</strong></p>
                    <p className="info-alignment-left">MySQL, DB2 and SQLServer.</p>
                    <p className="info-alignment-left"><strong>Tools:</strong></p>
                    <p className="info-alignment-left">Git, WordPress, Unity 3D, PhotoShop, Illustrator, Fireworks, DreamWeaver, PhoneGap, Adobe Air, Jira, Trello and Microsoft office.</p>
                    <p className="info-alignment-left"><strong>Operating systems:</strong></p>
                    <p className="info-alignment-left">Microsoft Windows, Linux (Ubuntu), Android and IoS.</p>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        );
    }
}

export default Info;