import { Amplify } from 'aws-amplify';
import Home from './components/home/home';
import SignIn from './components/signIn/signIn';
import awsconfig from './aws-exports';
import LogIn from './components/logIn/logIn';
import PrivateRoute from './routes/privateRoute';
import { useContext } from 'react';
import { CurrentUserContext } from '../src/context/currentUser.context'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const { currentUser } = useContext(CurrentUserContext);

  const isUserAuthenticated = () => (currentUser != null);

  console.log('current user is: ', currentUser);

  Amplify.configure(awsconfig);
  return (

    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/home' element={isUserAuthenticated() ? <Home /> : <LogIn />} />
      <Route path='/log-in' element={<LogIn />} />
    </Routes>
  )
};

export default App;