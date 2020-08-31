import React, {useContext, useReducer, useState} from "react";

const AlertContext = React.createContext();

export const useAlert = () => useContext(AlertContext);

const reducer = (state, action) => {
    switch (action.type) {
        case 'show': return {...state, visible: true, text: action.text}
        case 'hide': return {...state, visible: false}
        default: return state
    }
}

export const AlertProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''
    })

    const show = text => dispatch({ type: 'show', text })
    const hide = () => dispatch({ type: 'hide' })

    return(
        <AlertContext.Provider value={{
            visible: state.visible,
            text: state.text,
            show,
            hide
        }}>
            { children }
        </AlertContext.Provider>
    )
}
