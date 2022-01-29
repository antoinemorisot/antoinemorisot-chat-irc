import React from "react";
import "../style/Bargroup.css";
import Bargroup from './Bargroup';
import Chatgroup from './Chatgroup';

export default class Managerchat extends React.Component   {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.groupes = React.createRef();
        this.state = {
            listeChats: [],
            sltGrp: undefined
        }
    }

    componentDidMount() {
        let listeGroupes = this.groupes.current.state.groupes;
        let listeChats = listeGroupes.map((groupe) => {
            return <Chatgroup name={groupe} refGroupes={this.groupes}/>
        })
        this.setState({
            listeChats: listeChats
        })
    }
    
    render() {
        let {sltGrp} = this.state;       
        return (
            <>
                <Bargroup managerRef={this.ref} ref={this.groupes}/>     
                {
                    sltGrp? this.state.listeChats.find((el) => el.props.name === sltGrp): null
                }           
            </>
        )
    }
}