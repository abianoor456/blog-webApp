import { Routes, Route } from 'react-router';
import { useContext } from 'react';
import { CurrentUserContext } from '../context/currentUser.context'
import Home from '../components/home/home';

const PrivateRoute = () => {
    const { currentUser } = useContext(CurrentUserContext);

    const isUserAuthenticated = () => {
        return (currentUser != null);
    }

    return (
        <Route exact path='/home' element={isUserAuthenticated && <Home />} />
    )
}

export default PrivateRoute;