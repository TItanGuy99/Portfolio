import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            message:''
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) 
    {
        this.setState({name: event.target.value})
    }

    handleChangeMessage(event) 
    {
        this.setState({message: event.target.value})
    }

    handleSubmit(event)
    {
        event.preventDefault();

        var templateParams = {
            reply_to:'luiz.neosnk@gmail.com',
            from_name: this.state.name,
            to_name: "Luiz",
            message_html: this.state.message
        }

        window.emailjs.send('luiznai89', 'template_FqKd90F1', templateParams, 'user_8i3zbvW5lX9Uyd50L5UWg') 
        .then(function (response){
            alert('Message sent successful');
        }, function (err){
            console.log(err);
        })

        this.setState({
            name:'',
            message:''
        })
    }

    render()
    {
        return(
            <div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <form>
                            <h2 className="padding-top">
                                Leave a message to me!
                            </h2>
                            <p className="padding-top">
                                Name:
                            </p>
                                <input type="text" value={this.state.value} onChange={this.handleChangeName} />
                            <br />
                            <p  className="padding-top">
                                Message:
                            </p>
                                <textarea value={this.state.value} onChange={this.handleChangeMessage} />
                            <p className="padding-top" >
                                <input type="submit" onClick={this.handleSubmit} />
                            </p>
                        </form>
                    </div>
                    <div className="col-2"></div>

                    <div className="col-2"></div>
                    <div className="col-8"> <hr></hr></div>
                    <div className="col-2"></div>

                    <div className="col-2"></div>
                    <div className="col-8">
                        <p>Name: {this.state.name}</p>
                        <p>Message: {this.state.message}</p>
                    </div>
                    <div className="col-2"></div>

                </div>
            </div>
        );
    }
}

export default Contact;