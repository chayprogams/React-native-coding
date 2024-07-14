import { useContext } from "react";
import { TrackContext } from "../Context/TrackContext";
import { LocationContext } from "../Context/LocationContext";
export const CreateTrack = () => {
  const { createTracks } = useContext(TrackContext);
  const { state, reset } = useContext(LocationContext);
  const saveTrack = async () => {
    console.log(state.name, state.locations);
    await createTracks(state.name, state.locations);
    reset();
  }

  return [saveTrack];
}
