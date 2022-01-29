import React from "react";
import "../style/Bargroup.css";
import {ListGroup} from "react-bootstrap";
import update from 'immutability-helper';

export default class Bargroup extends React.Component   {
    constructor(props) {
        super(props);
        this.state = {
            groupes: ["Géneral","Privé","Promo"],
            sltGrp: undefined
        }        
    }

    ajouterGroupe = (groupe) => {        
        if (this.state.groupes.includes(groupe)) return;
        this.setState({
            groupes: update(this.state.groupes, {$push: [groupe]})
        })
    }  

    supprimerGroupe = (groupe) => {        
        let index = this.state.groupes.findIndex((el) => el === groupe);
        if (index === -1) return;
        this.setState({
            groupes: update(this.state.groupes, {$splice: [[index,1]]})
        })
    }

    selectGroupe = (groupe) => {
        this.setState({
            sltGrp: groupe
        }, () => {
            this.props.managerRef.setState({
                sltGrp: groupe
            });
        })

    }

    render() {
        let {groupes, sltGrp} = this.state;
        return (<>
                <div className="containerGroup">  
                    <ListGroup className="listeGroup">
                        {
                            groupes.map((groupe,key) => {
                                console.log(sltGrp, groupe);
                                return ( 
                                    <ListGroup.Item action variant="dark" key={key} onClick={this.selectGroupe.bind(this,groupe)} active={sltGrp === groupe}>
                                        {groupe}
                                    </ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                </div>
                </>
            )
    }

}