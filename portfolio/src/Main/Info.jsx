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
                    <div className="col-3"></div>
                    <div className="col-6 padding-top">
                    
                    <p className="info-alignment">Web Developer with over 7 years of experience. I work with front and back-end, I have also experience with DotNet, gamification, mobile and agile methodologies.</p>
                    <p className="info-alignment">I'm very passionate in learning new technologies. At the moment I'm focusing on React.JS, React Native, Redux and Node.js.</p>
                    <p className="info-alignment"><strong>Education:</strong></p>
                    <ul className="info-alignment">
                        <li>
                            Post Degree - Game Development
                        </li>
                        <li>
                            Graduation - Computer Science
                        </li>
                    </ul>
                    <p className="info-alignment"><strong>Languages:</strong></p>
                    <ul className="info-alignment">
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
                    <p className="info-alignment"><strong>Previous experiences:</strong></p>
                    <ul className="info-alignment">
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
                    <p className="info-alignment"><strong>Programming skills:</strong></p>
                    <p className="info-alignment">JavaScript (HTML, CSS), TypeScript, ActionScript 2 & 3, PHP, C#, C++ and C.</p>
                    <p className="info-alignment"><strong>Frameworks:</strong></p>
                    <p className="info-alignment">React.js, React Native, Redux, Vue.JS, Node.Js, GreenSock and JQuery.</p>
                    <p className="info-alignment"><strong>DataBases:</strong></p>
                    <p className="info-alignment">MySQL, DB2 and SQLServer.</p>
                    <p className="info-alignment"><strong>Tools:</strong></p>
                    <p className="info-alignment">Git, WordPress, Unity 3D, PhotoShop, Illustrator, Fireworks, DreamWeaver, PhoneGap, Adobe Air, Jira, Trello and Microsoft office.</p>
                    <p className="info-alignment"><strong>Operating systems:</strong></p>
                    <p className="info-alignment">Microsoft Windows, Linux (Ubuntu), Android and IoS.</p>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        );
    }
}

export default Info;