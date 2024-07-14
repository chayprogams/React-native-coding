import { createContext, useReducer } from "react";
import Axios from "../api/Axios";
import Reducer from "./Reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigationContext } from "../NavigationContext";
import SweetAlert from 'react-native-sweet-alert';
const initialState = [];
export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const navigation = useNavigationContext();
    const [state, dispatch] = useReducer(Reducer, initialState);

    const signup = async (userdata) => {
        try {
            const response = await Axios.post('/signup', userdata, {
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json',
                }
            });
            console.log(response.data.token);
            SweetAlert.showAlertWithOptions({
                title: 'SignUp Successful!',
                subTitle: '',
                style: 'success',
                cancellable: true
            }, () => navigation.navigate('Main'));
            AsyncStorage.setItem('token', response.data.token); // Correct usage of response data
            dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data });
        } catch (error) {
            console.error('Signup error:', error.response ? error.response.data : error.message);
            dispatch({ type: 'SIGNUP_ERROR', payload: error.message });
        }
    };
    const signin = async (userdata) => {
        try {
            const response = await Axios.post('/signin', userdata, {
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json',
                }
            });
            console.log(response.data.token);
            SweetAlert.showAlertWithOptions({
                title: 'SignIn Successful!',
                subTitle: '',
                style: 'success',
                cancellable: true
            }, () => navigation.navigate('Main'));
            AsyncStorage.setItem('token', response.data.token); // Correct usage of response data
            dispatch({ type: 'SIGNIN_SUCCESS', payload: response.data });
        } catch (error) {
            console.error('Signin error:', error.response ? error.response.data : error.message);
            dispatch({ type: 'SIGNIN_ERROR', payload: error.message });
        }
    };
    const clearerrormessage = ()=>{
        dispatch({
            type:'CLEAR_ERROR'
        })
    }
    const trylocalsignin = async()=>{
     const token = await AsyncStorage.getItem('token');
     if(token){
        navigation.navigate('Main');
     }else{
        navigation.navigate('Signin');
     }
    }
    const signout = async()=>{
      await AsyncStorage.removeItem('token');
      dispatch({type:'SIGN_OUT'});
      navigation.navigate('Signup');
    }
    return (
        <Context.Provider value={{ signup, state, signin, clearerrormessage, trylocalsignin, signout }}>
            {children}
        </Context.Provider>
    );
};
