import React from "react";
import "../style/Bargroup.css";

import {useDispatch, useSelector} from "react-redux";

import {ListGroup} from "react-bootstrap";
import {selectGroupe} from "../features/groupes/groupesSlice";



export default function Sidebar(){
    const groupes = useSelector((state) => state.groupes.list);
    const selectedGroupe = useSelector((state) => state.groupes.selected);
    const dispatch = useDispatch();

    return (
        <>
            <div className="containerGroup">
                <ListGroup className="listeGroup">
                    {
                        groupes.map((groupe,key) => {
                            return (
                                <ListGroup.Item action variant="dark" key={key} onClick={()=>dispatch(selectGroupe(groupe))} active={selectedGroupe === groupe}>
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

