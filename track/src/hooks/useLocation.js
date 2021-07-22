import { useEffect, useState } from "react"
import RNLocation from 'react-native-location'

const tenMetersWithDegrees = 0.0001;
var watchPositionAsync = null;
const getLocation = increment => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -122.0312186 + increment * tenMetersWithDegrees,
      latitude: 37.33233141 + increment * tenMetersWithDegrees
    }
  };
};

export default (shouldTrack, callback) => {
    const [err, setErr] = useState('')

    const startWatching = () => {
      RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'fine',
          rationale: {
            title: 'We need to access your location',
            message: 'We use your location to show where you are on the map',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        },
      }).then(granted => {
        if (granted) {
          var counter = {count: 0};
          watchPositionAsync = setInterval(() => {
            callback((getLocation(counter.count)))
            counter.count++;
        }, 1500);
          setErr('');
        } else setErr('Location permission not granted');
      });
    };
    useEffect(() => {
      if (shouldTrack) startWatching();
      else clearInterval(watchPositionAsync);

      return () => {
        if (!shouldTrack)
            clearInterval(watchPositionAsync);
      }
    }, [shouldTrack]);
    return [err]
}