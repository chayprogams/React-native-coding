import { useEffect, useContext } from "react";
import { LocationContext } from "./Context/LocationContext";

const tenMetersWithDegrees = 0.0001;

const useMockLocation = () => {
  const { AddLocation } = useContext(LocationContext);

  useEffect(() => {
    let counter = 0;

    const intervalId = setInterval(() => {
      const newLatitude = 37.33233141 + counter * tenMetersWithDegrees;
      const newLongitude = -122.0312186 + counter * tenMetersWithDegrees;

      const mockLocation = {
        timestamp: Date.now(),
        coords: {
          speed: 0,
          heading: 0,
          accuracy: 5,
          altitudeAccuracy: 5,
          altitude: 5,
          longitude: newLongitude,
          latitude: newLatitude,
        },
      };

      AddLocation(mockLocation, true); // Always add the new location
      counter++;
    }, 1000);

    return () => clearInterval(intervalId);
  }, [AddLocation]);
};

export default useMockLocation;
