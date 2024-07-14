import { createContext, useReducer } from "react";
import { TrackReducer } from "./TrackReducer";
import Tracker from "../api/tracker";
import SweetAlert from 'react-native-sweet-alert';
import { useNavigationContext } from "../NavigationContext";
const initialState = {};

export const TrackContext = createContext();

export const TrackContextProvider = ({ children }) => {
  const [states, dispatch] = useReducer(TrackReducer, initialState);
  const navigation = useNavigationContext();
  const fetchTracks = async () => {
    try {
      const response = await Tracker.get('/tracks');
      dispatch({ type: 'fetch_tracks', payload: response.data });
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  };

  const createTracks = async(name, locations) => {
    // Implement the logic for creating a new track
   await Tracker.post('/tracks',{name,locations});
    SweetAlert.showAlertWithOptions({
      title: 'Recording Saved Successfully!',
      subTitle: '',
      style: 'success',
      cancellable: true
  }, () => navigation.navigate('TrackList'));
  };

  return (
    <TrackContext.Provider value={{ fetchTracks, createTracks, states }}>
      {children}
    </TrackContext.Provider>
  );
};
