import { createContext, useReducer } from "react";
import { TrackReducer } from "./TrackReducer";
import Tracker from "../api/tracker";
import SweetAlert from 'react-native-sweet-alert';
import { useNavigationContext } from "../NavigationContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = [];

export const TrackContext = createContext();

export const TrackContextProvider = ({ children }) => {
  const [states, dispatch] = useReducer(TrackReducer, initialState);
  const navigation = useNavigationContext();

  const fetchTracks = async () => {
    try {
      const response = await Tracker.get('/tracks');
      dispatch({ type: 'fetch_tracks', payload: response.data });
      await AsyncStorage.setItem('TrackData', JSON.stringify(response.data)); // Convert to JSON string
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  };

  const createTracks = async (name, locations) => {
    try {
      await Tracker.post('/tracks', { name, locations });
      SweetAlert.showAlertWithOptions({
        title: 'Recording Saved Successfully!',
        subTitle: '',
        style: 'success',
        cancellable: true
      }, () => navigation.navigate('TrackList'));
    } catch (error) {
      console.error("Error creating track:", error);
    }
  };

  return (
    <TrackContext.Provider value={{ fetchTracks, createTracks, states }}>
      {children}
    </TrackContext.Provider>
  );
};
