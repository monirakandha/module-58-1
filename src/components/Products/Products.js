import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
const auth = getAuth(app);
const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Knok Know ! who is there</h2>
            <h4>{user ? user.displayName : 'No Body' }</h4>
        </div>
    );
};

export default Products;