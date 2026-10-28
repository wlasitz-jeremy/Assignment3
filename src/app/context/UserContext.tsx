import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [accountUserName, setAccountUserName] = useState("");
    return (
        <UserContext.Provider value={{accountUserName, setAccountUserName}}>
            {children}    
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
