import React, {createContext, useState} from "react";
import ProductApi from "./services/ProductApi";


export const State  = createContext();

export const DataProvider = ({children}) => {
    const [token, setToken] = useState(false);
    

    const state = {
        token: [token, setToken],
        ProductApi: ProductApi()
    }
    
    return (
        <State.Provider  value={state}>
            {children}
        </State.Provider >
    )
};