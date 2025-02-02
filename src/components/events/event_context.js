import  React, {createContext, useState } from "react";

export const Event_data = createContext(null);

const Context = ({ children }) => {
    const [message, setMessage] = useState ();
    return (
        <Event_data.Provider value={{ message, setMessage }}>
            {children}
        </Event_data.Provider>
    );
};

export default Context;
