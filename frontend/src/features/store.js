import { configureStore } from '@reduxjs/toolkit'
import groupesReducer from "./groupes/groupesSlice";



export default configureStore({
    reducer: {
        groupes:groupesReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
