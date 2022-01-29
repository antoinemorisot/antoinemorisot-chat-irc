import React from "react";
import "../style/Chatgroup.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import update from 'immutability-helper';

export default class Chatgroup extends React.Component   {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }        
    }

    componentDidMount() {
        document.addEventListener("keydown", (e) => {
            if (e.code === "Enter") this.handleChat();
        })
    }
    
    envoieMessage = () => {
        this.setState({
            messages: update(this.state.messages, {$push: [document.getElementById('messages').value]})
        })
    }  

    messagePrive = (message) => {
        this.setState({
            messages: update(this.state.messages, {$push: [message]})
        })
    } 

    handleChat = () => {
        let text = document.getElementById('messages').value;
        if (text.startsWith("/")) {
            let composants = text.split(" ");
            composants[0] = composants[0].substring(1);
            switch(composants[0]) {
                case "create":
                    if (composants[1]) this.props.refGroupes.current.ajouterGroupe(composants[1]);
                    break;
                case "list":                        
                    break;
                case "nick":                        
                    break;
                case "delete":  
                    if (composants[1]) this.props.refGroupes.current.supprimerGroupe(composants[1]);                      
                    break;
                case "join":                        
                    break;
                case "quit":                        
                    break;
                case "users":                        
                    break;
                case "msg":    
                    if (composants[1]) this.props.refGroupes.current.ajouterGroupe(composants[1]);
                    this.messagePrive(composants[2]);

                    break;
                default:
                    break;
            }
        }
        else this.envoieMessage();
    }

    render() {
        let {messages} = this.state;
        return (<>
                <div className="containerChat">  
                    <div className="containerMsg">{messages.map((message,key) => {
                        return (
                            <div className="divMsg" key={key}>
                                <span className="affMsg">{message}</span>
                            </div>)
                    })}
                    </div>
                    <div className="containerInputMsg">
                        <label> Message : </label><input type="text" id='messages' placeholder="Message..." />
                        <Button type="submit" variant="secondary" value="Envoyer" onClick={this.handleChat}>Envoie</Button>
                    </div>
                </div>   
                </>
            )
    }

}