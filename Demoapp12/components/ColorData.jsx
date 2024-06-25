const Reducer = (state,action)=>{
    switch(action.type){
        case "morered":
            return {...state,red:state.red+action.payload}
        case "lessred":
            return {...state,red:state.red+action.payload}
        case "moreblue":
            return {...state,blue:state.blue+action.payload}
        case "lessblue":
            return {...state,blue:state.blue+action.payload}
        case "moregreen":
                return {...state,green:state.green+action.payload}
        case "lessgreen":
                return {...state,green:state.green+action.payload}
        default:
            return state;
    }
}
export default Reducer;