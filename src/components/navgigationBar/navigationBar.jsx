import './navigationBar.styles.scss'
import { ReactComponent as SearchIcon } from '../../assets/Nav-Icons.svg';
import { ReactComponent as AddCircle } from '../../assets/add_circle.svg';
import { useContext } from 'react'
import { SearchContext } from '../../context/search.context'

const NavigationBar = () => {
    const { setDisplaySearchBar, displaySearchBar, resetSearchStr } = useContext(SearchContext);
    const toggleDisplayBar = () => {
        const toggle = !displaySearchBar;
        setDisplaySearchBar(toggle);
        if (!toggle) resetSearchStr();
    }
    return (
        <div className='Nav-Bar'>
            <div className='profile-picture-container'>
                <div className='profile-picture' >
                    <p className='profile-picture-text'>S</p>
                </div>
            </div>
            <div className='search-bar-container' onClick={toggleDisplayBar}>
                <SearchIcon className='search-bar-icon'></SearchIcon>
                <span className='search-bar-text'>search</span>
            </div>
            <div className='create-blog-container'>
                <AddCircle className='create-blog-icon'></AddCircle>
                <span className='create-blog-text'>create</span>
            </div>
        </div>
    )
}

export default NavigationBar;