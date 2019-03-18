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
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6 padding-top">
                    
                    <p class="info-alignment">Web Developer with over 7 years of experience. I work with front and back-end, I have also experience with DotNet, gamification, mobile and agile methodologies.</p>
                    <p class="info-alignment">I'm very passionate in learning new technologies. At the moment I'm focusing on React.JS, React Native, Redux and Node.js.</p>
                    <p class="info-alignment"><strong>Education:</strong></p>
                    <ul class="info-alignment">
                        <li>
                            Post Degree - Game Development
                        </li>
                        <li>
                            Graduation - Computer Science
                        </li>
                    </ul>
                    <p class="info-alignment"><strong>Languages:</strong></p>
                    <ul class="info-alignment">
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
                    <p class="info-alignment"><strong>Previous experiences:</strong></p>
                    <ul class="info-alignment">
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
                    <p class="info-alignment"><strong>Programming skills:</strong></p>
                    <p class="info-alignment">JavaScript (HTML, CSS), TypeScript, ActionScript 2 & 3, PHP, C#, C++ and C.</p>
                    <p class="info-alignment"><strong>Frameworks:</strong></p>
                    <p class="info-alignment">React.js, React Native, Redux, Vue.JS, Node.Js, GreenSock and JQuery.</p>
                    <p class="info-alignment"><strong>DataBases:</strong></p>
                    <p class="info-alignment">MySQL, DB2 and SQLServer.</p>
                    <p class="info-alignment"><strong>Tools:</strong></p>
                    <p class="info-alignment">Git, WordPress, Unity 3D, PhotoShop, Illustrator, Fireworks, DreamWeaver, PhoneGap, Adobe Air, Jira, Trello and Microsoft office.</p>
                    <p class="info-alignment"><strong>Operating systems:</strong></p>
                    <p class="info-alignment">Microsoft Windows, Linux (Ubuntu), Android and IoS.</p>
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>
        );
    }
}

export default Info;