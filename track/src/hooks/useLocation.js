import { useEffect, useState } from "react"
import RNLocation from 'react-native-location'

const tenMetersWithDegrees = 0.0001

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
  }
}

let counter = 0;
export default (shouldTrack, callback, state, unreset) => {
    const [err, setErr] = useState('')

    useEffect(() => {
      let watchPositionAsync;
      
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
            if(state.reset)
            {
              counter = 0
              unreset()
            }
            watchPositionAsync = setInterval(() => {
                callback(getLocation(counter))
                counter++
            }, 1500)
            setErr('')
          } else{
            setErr('Location permission not granted')
          } 
        })
      };
      if (shouldTrack)
        startWatching()
      else if(watchPositionAsync)
        clearInterval(watchPositionAsync)

      return () => {
        if (watchPositionAsync)
          clearInterval(watchPositionAsync)
      }
    }, [shouldTrack, callback])
    return [err]
}