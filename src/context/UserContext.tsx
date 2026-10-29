import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

type UserValue = {
  accountUserName: string;
  setAccountUserName: Dispatch<SetStateAction<string>>;
  accountPhoneNumber: string;
  setAccountPhoneNumber: Dispatch<SetStateAction<string>>;
  accountEmail: string;
  setAccountEmail: Dispatch<SetStateAction<string>>;
  registeredUserName: string;
  setRegisteredUserName: Dispatch<SetStateAction<string>>;
  registeredPassword: string;
  setRegisteredPassword: Dispatch<SetStateAction<string>>;
  registeredFirstName: string;
  setRegisteredFirstName: Dispatch<SetStateAction<string>>;
  registeredLastName: string;
  setRegisteredLastName: Dispatch<SetStateAction<string>>;
  registeredPhoneNumber: string;
  setRegisteredPhoneNumber: Dispatch<SetStateAction<string>>;
  registeredEmail: string;
  setRegisteredEmail: Dispatch<SetStateAction<string>>;
  dateOfBirth: Date | null;
  setDateOfBirth: Dispatch<SetStateAction<Date | null>>;
};

const UserContext = createContext<UserValue>({
  accountUserName: "",
  setAccountUserName: () => {},
  accountPhoneNumber: "",
  setAccountPhoneNumber: () => {},
  accountEmail: "",
  setAccountEmail:  () => {},
  registeredUserName: "",
  setRegisteredUserName: () => {},
  registeredPassword: "",
  setRegisteredPassword: () => {},
  registeredFirstName: "",
  setRegisteredFirstName: () => {},
  registeredLastName: "",
  setRegisteredLastName: () => {},
  registeredPhoneNumber: "",
  setRegisteredPhoneNumber: () => {},
  registeredEmail: "",
  setRegisteredEmail: () => {},
  dateOfBirth: null,
  setDateOfBirth: () => {},
});

interface UserProviderProps {
    children: React.ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
    const [accountUserName, setAccountUserName] = useState("");
    const [accountPhoneNumber, setAccountPhoneNumber] = useState("");
    const [accountEmail, setAccountEmail] = useState("");
    const [registeredUserName, setRegisteredUserName] = useState("");
    const [registeredPassword, setRegisteredPassword] = useState("");
    const [registeredFirstName, setRegisteredFirstName] = useState("");
    const [registeredLastName, setRegisteredLastName] = useState("");
    const [registeredPhoneNumber, setRegisteredPhoneNumber] = useState("");
    const [registeredEmail, setRegisteredEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
    return (
        <UserContext.Provider
            value={{
                accountUserName,
                setAccountUserName,
                accountPhoneNumber, 
                setAccountPhoneNumber,
                accountEmail, 
                setAccountEmail,
                registeredUserName,
                setRegisteredUserName,
                registeredPassword,
                setRegisteredPassword,
                registeredFirstName,
                setRegisteredFirstName,
                registeredLastName,
                setRegisteredLastName,
                registeredPhoneNumber, 
                setRegisteredPhoneNumber,
                registeredEmail,
                setRegisteredEmail,
                dateOfBirth,
                setDateOfBirth,
            }}
        >
            {children}   
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
