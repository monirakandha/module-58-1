import React from 'react';
import useFireBase from '../../hooks/useFireBase';

const Login = () => {
    const {signInWithGoogle} = useFireBase();
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{margin:'20px'}}>
            <button onClick={signInWithGoogle} >Sign In Using Google</button>
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