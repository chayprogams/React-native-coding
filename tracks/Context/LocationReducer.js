  const LocationReducer = (state, action) => {
    switch(action.type) {
      case 'ADD_LOCATION':
        return {...state, currentlocation: action.payload};
      case 'START_RECORD':
        return {...state, recording: true};
      case 'STOP_RECORD':
        return {...state, recording: false};
      case 'ADD_CURRENT_LOCATION':
        return {...state, locations: [...state.locations, action.payload]};
      case 'CHANGE_NAME':
        return {...state, name: action.payload};
      case 'reset':
        return {...state, name: '', locations: []};
      default:
        return state;
    }
  };
  
  export default LocationReducer;
  