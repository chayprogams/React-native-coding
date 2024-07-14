import React, { createContext, useReducer } from "react";
import LocationReducer from "./LocationReducer";

const initialState = {
  currentlocation: null,
  locations: [],
  recording: false,
  name: ''
};

export const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(LocationReducer, initialState);

  const StartRecording = () => {
    dispatch({type: 'START_RECORD'});
  }

  const StopRecording = () => {
    dispatch({type: 'STOP_RECORD'});
  }

  const AddLocation = (location, recording) => {
    console.log('HI');
    dispatch({type: 'ADD_LOCATION', payload: location});
    if (recording) {
      dispatch({type: 'ADD_CURRENT_LOCATION', payload: location});
      console.log(recording);
    }
  }

  const ChangeName = (name) => {
    dispatch({type: 'CHANGE_NAME', payload: name});
  }

  const reset = () => {
    dispatch({type: 'reset'});
  }

  return (
    <LocationContext.Provider value={{
      StartRecording, StopRecording, AddLocation, state, ChangeName, reset,
    }}>
      {children}
    </LocationContext.Provider>
  );
}
