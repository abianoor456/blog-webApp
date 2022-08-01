import './navigationBar.styles.scss'
import { ReactComponent as SearchIcon } from '../../assets/Nav-Icons.svg';
import { ReactComponent as ProfilePicture } from '../../assets/Ellipse 1.svg';
import { ReactComponent as AddCircle } from '../../assets/add_circle.svg';

const NavigationBar = ({ }) => {

    return (
        <div className='Nav-Bar'>
            <div className='profile-picture-container'>
                <ProfilePicture className='profile-picture' ></ProfilePicture>
            </div>
            <div className='search-bar-container'>
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