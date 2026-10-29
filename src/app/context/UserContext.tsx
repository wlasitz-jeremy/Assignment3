import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

type UserValue = {
  accountUserName: string;
  setAccountUserName: Dispatch<SetStateAction<string>>;
  registeredUserName: string;
  setRegisteredUserName: Dispatch<SetStateAction<string>>;
  registeredPassword: string;
  setRegisteredPassword: Dispatch<SetStateAction<string>>;
  registeredFullName: string;
  setRegisteredFullName: Dispatch<SetStateAction<string>>;
  registeredEmail: string;
  setRegisteredEmail: Dispatch<SetStateAction<string>>;
};

const UserContext = createContext<UserValue>({
  accountUserName: "",
  setAccountUserName: () => {},
  registeredUserName: "",
  setRegisteredUserName: () => {},
  registeredPassword: "",
  setRegisteredPassword: () => {},
  registeredFullName: "",
  setRegisteredFullName: () => {},
  registeredEmail: "",
  setRegisteredEmail: () => {},
});

interface UserProviderProps {
    children: React.ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
    const [accountUserName, setAccountUserName] = useState("");
    const [registeredUserName, setRegisteredUserName] = useState("");
    const [registeredPassword, setRegisteredPassword] = useState("");
    const [registeredFullName, setRegisteredFullName] = useState("");
    const [registeredEmail, setRegisteredEmail] = useState("");
    return (
        <UserContext.Provider
            value={{
                accountUserName,
                setAccountUserName,
                registeredUserName,
                setRegisteredUserName,
                registeredPassword,
                setRegisteredPassword,
                registeredFullName,
                setRegisteredFullName,
                registeredEmail,
                setRegisteredEmail,
            }}
        >
            {children}   
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
