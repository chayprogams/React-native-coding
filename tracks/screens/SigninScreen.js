import AuthForm from "./AuthForm";
import CommonText from "./CommonText";
import { useContext } from "react";
import { Context } from "../Context/GlobalContext";
import React from "react";
import { useState } from "react";
const Signin = ({navigation}) =>{
  const {signin,state,clearerrormessage} = useContext(Context);
  const [error, setError] = useState('');
  React.useEffect(() => {
     navigation.addListener('blur', () => clearerrormessage())
    if (state && state.length > 0) {
        const errorMessage = state.map(error => error.userError).join(', ');
        setError(errorMessage);
    } else {
        setError('');
    }
}, [state]);
return (
  <>
  <AuthForm buttontitle = 'Sign in' errormessage={error} redirect={signin} headingtext='Sign In'/>
  <CommonText text='Not a member?' navtext='Please Sign Up'/>
  </>
);
}
export default Signin