export const TrackReducer = (states,action)=>{
switch(action.type){
case 'fetch_tracks':
    return action.payload;
default:
    return states;
}
}