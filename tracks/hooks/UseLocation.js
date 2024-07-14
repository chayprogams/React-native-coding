import { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { requestPermission } from 'react-native-location';

const useLocation = (callback, recording) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscription;

    const startWatching = async () => {
      try {
        const permission = await requestPermission({
          ios: 'whenInUse',
          android: { detail: 'coarse' },
        });

        if (!permission) {
          throw new Error('Location permission not granted');
        }

        subscription = Geolocation.watchPosition(
          callback,
          (error) => setErr(error),
          {
            enableHighAccuracy: true,
            distanceFilter: 10,
            timeout: 1000,
          }
        );
      } catch (error) {
        setErr(error);
      }
    };

    if (recording) {
      startWatching();
    } 
    else {
      if (subscription) {
        Geolocation.clearWatch(subscription);
      }
    }

    return () => {
      if (subscription) {
        Geolocation.clearWatch(subscription);
      }
    };
  }, [callback, recording]);

  return [err];
};

export default useLocation;
