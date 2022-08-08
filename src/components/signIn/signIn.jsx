import './signIn.styles.scss';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const SignIn = ({ signOut, user }) => {
    return (
        <div>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
        </div>
    )
}

export default (SignIn);