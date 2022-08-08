import { createContext, useState, useEffect } from "react";

const SearchContext = createContext({
    displaySearchBar: false,
    setDisplaySearchBar: () => { },
    searchStr: ''
});

const SearchProvider = ({ children }) => {
    const [displaySearchBar, setDisplaySearchBar] = useState(false);
    const [searchStr, setSearchStr] = useState('');
    const resetSearchStr = () => {
        setSearchStr('')
    }
    const value = { displaySearchBar, setDisplaySearchBar, searchStr, setSearchStr, resetSearchStr };
    return (
        <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
    )
}

export {
    SearchContext,
    SearchProvider
}
