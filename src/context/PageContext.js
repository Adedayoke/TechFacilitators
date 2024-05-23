import React, { createContext, useState } from "react";

export const PageContext = createContext();

export const PageContextProvider = ({children})=>{

    const [state, setState] = useState();


    return(
        <PageContext.Provider value={{state, setState}}>
            {children}
        </PageContext.Provider>
    )
}