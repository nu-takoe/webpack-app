import React, { createContext } from "react";

interface IAppContext {
    state: { first: string; second: string; third: string };
    setState: React.Dispatch<
        React.SetStateAction<{
            first: string;
            second: string;
            third: string;
        }>
    >;
}

const AppContext = createContext<Partial<IAppContext>>({})
export default AppContext;
