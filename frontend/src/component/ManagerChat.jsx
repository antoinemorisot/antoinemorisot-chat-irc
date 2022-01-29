import React, {useEffect} from "react";
import "../style/Bargroup.css";

import Chat from "./Chat";

import {useDispatch, useSelector} from "react-redux";
import {ajouterGroupe, selectGroupe} from "../features/groupes/groupesSlice";
import Sidebar from "./Sidebar";

const baseGroup = ["Général","Promo","BG"];

export default function ManagerChat(){
    const selectedGroupe = useSelector((state) => state.groupes.selected);


    const dispatch = useDispatch();

    useEffect(()=>{
        baseGroup.forEach((groupe)=>{
            dispatch(ajouterGroupe(groupe));
        });
        dispatch(selectGroupe(undefined));
    },[dispatch]);


    return (
        <>
            <Sidebar/>
            <Chat name={selectedGroupe}/>
        </>
    )

}

