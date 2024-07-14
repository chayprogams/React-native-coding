import React, { useState, useContext, useCallback } from 'react';
import { Context } from '../Context/GlobalContext';
import CommonText from './CommonText';
import AuthForm from './AuthForm';
const Signup = ({navigation}) => {
    const { signup, state, clearerrormessage, trylocalsignin } = useContext(Context);
    const [error, setError] = useState('');
    // Handle error display from state
    React.useEffect(() => {
        navigation.addListener('blur', () => clearerrormessage())
        if (state && state.length > 0) {
            const errorMessage = state.map(error => error.userError).join(', ');
            setError(errorMessage);
        } else {
            setError('');
        }
    }, []);
    return (
           <>
           <AuthForm buttontitle = 'Sign Up' errormessage={error} redirect={signup} headingtext='Sign Up'/>
           <CommonText text='Already a member?' navtext='Please login'/>
           </>
    );
};


export default Signup;
