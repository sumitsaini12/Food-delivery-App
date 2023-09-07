import { createContext, useContext, useReducer } from "react";


export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, childred }) => (
    <StateContext.Provider value={useReducer(initialState, reducer)} >
        {childred}
    </StateContext.Provider>

);



export const useStateValue = () => useContext(StateContext);