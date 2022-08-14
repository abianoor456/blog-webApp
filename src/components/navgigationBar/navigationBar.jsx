import './navigationBar.styles.scss'
import { ReactComponent as SearchIcon } from '../../assets/Nav-Icons.svg';
import { ReactComponent as AddCircle } from '../../assets/add_circle.svg';
import { ReactComponent as LogoutIcon } from '../../assets/logout-svgrepo-com .svg';
import { useContext } from 'react'
import { SearchContext } from '../../context/search.context'
import { useState } from 'react';
import AddPost from '../addPost/addPost';
import { Button } from 'antd';
import { Auth } from 'aws-amplify';
import { CurrentUserContext } from '../../context/currentUser.context'
import { useNavigate } from 'react-router-dom';


const NavigationBar = () => {
    const navigate = useNavigate();
    const { setDisplaySearchBar, displaySearchBar, resetSearchStr } = useContext(SearchContext);
    const [modalIsOpen, setIsOpen] = useState(false);

    const { setCurrentUser } = useContext(CurrentUserContext);

    const customStyles = {
        content: {
            width: '600px',
            height: '400px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            borderRadius: '10px',
            border: '1px solid black'
        },
    };

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const toggleDisplayBar = () => {
        const toggle = !displaySearchBar;
        setDisplaySearchBar(toggle);
        if (!toggle) resetSearchStr();
    }

    const logOutHandler = async () => {
        try {
            await Auth.signOut();
            setCurrentUser(null);
            navigate('/log-in');
        } catch (error) {
            console.log('error signing out: ', error);
        }
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
            <div className='create-blog-container' onClick={openModal}>
                <AddCircle className='create-blog-icon'></AddCircle>
                <span className='create-blog-text'>create</span>
            </div>
            {modalIsOpen && <AddPost modalIsOpen={modalIsOpen} closeModal={closeModal} customStyles={customStyles} />}
            <div className='sign-out-btn-container' onClick={logOutHandler} >
                <LogoutIcon className='sign-out-icon' />
            </div>
        </div>
    )
}

export default NavigationBar;