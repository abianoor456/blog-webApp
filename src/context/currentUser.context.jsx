import { createContext, useState } from "react";


const CurrentUserContext = createContext({
    currentUser: null,
    setCurrentUser: () => { }
});

const CurrentUserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    return (
        <CurrentUserContext.Provider value={value}>{children}</CurrentUserContext.Provider>
    )
}

export {
    CurrentUserContext,
    CurrentUserProvider
}
