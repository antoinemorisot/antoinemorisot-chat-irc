import React from "react";
import "../style/Chatgroup.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import update from 'immutability-helper';
import { connect } from 'react-redux';
import {ajouterGroupe, supprimerGroupe} from "../features/groupes/groupesSlice";

class Chat extends React.Component   {
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
        },this.clearInput)
    }

    handleChat = () => {
        let text = document.getElementById('messages').value;
        if (text.startsWith("/")) {
            let composants = text.split(" ");
            composants[0] = composants[0].substring(1);
            switch(composants[0]) {
                case "create":
                    if (composants[1]) this.props.ajouterGroupe(composants[1]);
                    break;
                case "list":
                    break;
                case "nick":
                    break;
                case "delete":
                    if (composants[1]) this.props.supprimerGroupe(composants[1]);
                    break;
                case "join":
                    break;
                case "quit":
                    break;
                case "users":
                    break;
                case "msg":
                    if (composants[1]) this.props.ajouterGroupe(composants[1]);
                    break;
                default:
                    break;
            }
        }
        else return this.envoieMessage();
        this.clearInput();
    }

    clearInput = ()=>{
        document.getElementById('messages').value='';
    }

    render() {
        let {messages} = this.state;
        if(!this.props.name) return(<div className={"text-center text-white containerChat"}>Sélectionnez un channel</div>);
        return (<>
                <div className="containerChat">
                    <div>{this.props.name}</div>
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
export default  connect(null,{ajouterGroupe,supprimerGroupe})(Chat);
