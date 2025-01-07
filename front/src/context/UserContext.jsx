import { createContext, useContext, useState } from "react";

export const UserContext = createContext({
    user: {},
    userAppointments: [],
    setUser: () => {},
    setUserAppointments: () => {}
});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [userAppointments, setUserAppointments] = useState([]);

    console.log(user, 'User logged');
    
    return (
        <UserContext.Provider value={{
            user, setUser, userAppointments, setUserAppointments
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);