import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

interface UserProviderProps {
    children: React.ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
    const [accountUserName, setAccountUserName] = useState("");
    return (
        <UserContext.Provider value={{ accountUserName, setAccountUserName }}>
            {children}   
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
