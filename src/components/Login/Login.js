import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{margin:'20px'}}>
            <button onClick={() => signInWithGoogle()}>Sign In Using Google</button>
            </div>
            <form action="">
                <input type="email" placeholder='Enter Your Email Here' name="" id="" />
                <br/>
                <br/>
                <input type="password" placeholder='Enter Your Password Here' name="" id="" />
                <br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;