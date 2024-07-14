import { useEffect, useContext } from "react";
import { LocationContext } from "./Context/LocationContext";

const tenMetersWithDegrees = 0.0001;

const useMockLocation = () => {
  const { AddLocation } = useContext(LocationContext);

  useEffect(() => {
    let counter = 0;

    const intervalId = setInterval(() => {
      // Simulate a small change in location
      const newLatitude = 37.33233141 + counter * tenMetersWithDegrees;
      const newLongitude = -122.0312186 + counter * tenMetersWithDegrees;

      // Create a mock location object
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

      // Update the location context
      AddLocation(mockLocation,false);
      counter++;
    }, 1000); // Update every second

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [AddLocation]);
};

export default useMockLocation;
