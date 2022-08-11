import { Amplify } from 'aws-amplify';
import { Routes, Route } from 'react-router';
import Home from './components/home/home';
import AddPost from './components/addPost/addPost';
import SignIn from './components/signIn/signIn';
import awsconfig from './aws-exports';
import LogIn from './components/logIn/logIn';

const App = () => {
  Amplify.configure(awsconfig);
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/home' element={<Home />} />
      <Route path='/log-in' element={<LogIn />} />
    </Routes>
  )
};

export default App;