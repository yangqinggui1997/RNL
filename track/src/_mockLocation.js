import RNLocation from 'react-native-location'

const tenMetersWithDegrees = 0.0001

// const getLocation = increment => {
//     return {
//         timestamp: 10000000,
//         coords: {
//             speed: 0,
//             heading: 0,
//             accuracy: 5,
//             altitudeAccuracy: 5,
//             altitude: 5,
//             longitude: -122.0312186 + increment * tenMetersWithDegrees,
//             latitude: 37.33233141 + increment * tenMetersWithDegrees
//         }
//     }
// }

let counter = 0
setInterval(() => {
    RNLocation.configure({
        distanceFilter: counter *  tenMetersWithDegrees, // Meters
    })
    counter++;
},
1000)

export default RNLocation.configure({
    distanceFilter: 100 , // Meters
    desiredAccuracy: {
      ios: "best",
      android: "balancedPowerAccuracy"
    },
    // Android only
    androidProvider: "auto",
    interval: 1000, // Milliseconds
    fastestInterval: 3000, // Milliseconds
    maxWaitTime: 1000, // Milliseconds
})