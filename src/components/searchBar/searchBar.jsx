import './searchBar.styles.css'
import { SearchContext } from '../../context/search.context'
import { useContext } from 'react'

const SearchBar = ({ className, placeHolder }) => {
    const { setSearchStr } = useContext(SearchContext);
    const onSearchChange = async (event) => {
        const searchFieldStr = event.target.value.toLocaleLowerCase();
        setSearchStr(searchFieldStr);
    }
    return (
        <input className={`search-box ${className}`} type='search' placeholder={placeHolder} onChange={onSearchChange}></input>
    )
}

export default SearchBar;