import { createContext, useState } from "react";

const ModalContext = createContext({
    displaySearchBar: false,
    setDisplaySearchBar: () => { },
    searchStr: ''
});

const ModalProvider = ({ children }) => {
    const [displaySearchBar, setDisplaySearchBar] = useState(false);
    const [searchStr, setSearchStr] = useState('');
    const resetSearchStr = () => {
        setSearchStr('')
    }
    const value = { displaySearchBar, setDisplaySearchBar, searchStr, setSearchStr, resetSearchStr };
    return (
        <ModalProvider.Provider value={value}>{children}</ModalProvider.Provider>
    )
}

export {
    SearchContext,
    SearchProvider
}
