import './login.styles.scss'
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { CurrentUserContext } from '../../context/currentUser.context'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

async function signIn(username, password) {

    try {
        const user = await Auth.signIn(username, password);
        console.log('logged in user:', user);
        const groups = user.signInUserSession.accessToken.payload["cognito:groups"];
        console.log('user groups are:', groups);
        const authenticatedUser = await Auth.currentAuthenticatedUser();
        console.log('auth user:', authenticatedUser);
        return authenticatedUser;
    } catch (error) {
        console.log('error signing in', error);
    }
}

const LogIn = () => {
    const navigate = useNavigate()

    const defaultFormFields = {
        email: '',
        password: ''
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(CurrentUserContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const user = await signIn(email, password);
        setCurrentUser(user);
        navigate('/home');
    }

    return (
        <div className='log-in-container'>
            <input onChange={handleChange} name="email"
                value={email} placeholder='Email Address' type='email' className='log-in-form-input'></input>

            <input onChange={handleChange} name="password"
                value={password} placeholder='Password' type='password' className='log-in-form-input'></input>

            <button className='submit-btn' onClick={onSubmit}>Submit</button>
        </div>

    )
}

export default LogIn;