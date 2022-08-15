import './signIn.styles.scss';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Hub } from 'aws-amplify';
import { useContext } from 'react';
import { CurrentUserContext } from '../../context/currentUser.context'


Hub.listen('auth', async ({ payload }) => {
    const { event } = payload;
    if (event === 'autoSignIn') {
        const user = payload.data;
    } else if (event === 'autoSignIn_failure') {
        // redirect to sign in page
        console.log('auto sign in failed')
    }
})


async function signUp({ password, email, phone_number }) {
    const username = email;
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                phone_number,   // optional - E.164 number convention
                // other custom attributes 
            },
            autoSignIn: { // optional - enables auto sign in after user is confirmed
                enabled: true,
            }
        });
        return user;

    } catch (error) {
        console.log('error signing up:', error);
    }
}


const SignIn = () => {

    const { setCurrentUser } = useContext(CurrentUserContext);
    const nav = useNavigate();

    const defaultFormFields = {
        email: '',
        password: ''
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const [code, setCode] = useState('');

    const handleCode = (event) => {
        setCode(event.target.value);
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        await signUp({ email, password });
    }

    async function confirmSignUp(event) {
        event.preventDefault();
        const username = email;
        await Auth.confirmSignUp(username, code);
        const authenticatedUser = await Auth.currentAuthenticatedUser();
        setCurrentUser(authenticatedUser);
        nav("/home");
    }

    return (
        <div className="sign-in-container">
            <h1>Welcome</h1>
            <p>Let’s sign you up quickly</p>
            <input onChange={handleChange} name="email"
                value={email} placeholder='Email Address' type='email' className='log-in-form-input'></input>

            <input onChange={handleChange} name="password"
                value={password} placeholder='Password' type='password' className='log-in-form-input'></input>

            <button className='submit-btn' onClick={onSubmit}>Submit</button>

            <div className='log-in-link'>
                <p>Already have an account?</p>
                <p>Log in</p>
            </div>
            <input onChange={handleCode} name='userCode' placeholder='code'></input>
            <button onClick={confirmSignUp}>Confirm Sign up</button>
        </div>
    )
}

export default SignIn;