import { createSlice } from '@reduxjs/toolkit'
import update from "immutability-helper";

export const groupesSlices = createSlice({
    name: 'groupes',
    initialState: {
        list: [],
        selected:undefined
    },
    reducers: {
        ajouterGroupe: (state, action) => {
            state.list = update(state.list,{$push:[action.payload]})
            state.selected=action.payload;
        },
        selectGroupe: (state,action)=>{
            state.selected = action.payload;
        },
        supprimerGroupe : (state,action)=>{
            let index = state.list?state.list.findIndex((el)=>el===action.payload):-1;
            if(index===-1)return;
            state.list = update(state.list,{$splice:[[index,1]]});
            state.selected = null
        }
    }
})

export const { ajouterGroupe, selectGroupe, supprimerGroupe } = groupesSlices.actions
export default groupesSlices.reducer
