const Reducer = (state, action) => {
    switch(action.type){
        case 'SIGNUP_ERROR':
            return [...state,{userError:action.payload}]
        case 'SIGNUP_SUCCESS':
            return [...state,{token:action.payload}]
        case 'SIGNIN_SUCCESS':
            return [...state,{token:action.payload}]
        case 'SIGNIN_ERROR':
            return [...state,{userError:action.payload}]
        case 'CLEAR_ERROR':
            return state.filter(item => !item.userError);
        case 'SIGN_OUT':
            return [...state,{token:null,userError:''}]
        case 'ADD_LOCATION':
            return [...state,{currentlocation:action.payload}]
    }
  };
  
  export default Reducer;