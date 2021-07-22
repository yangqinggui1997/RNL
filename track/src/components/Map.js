import React, { useContext } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import MapView, { Circle, Polygon } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext)
    if(!currentLocation) {
        return <ActivityIndicator size="large" style={{marginTop: 200}}/>
    }
    // console.log(currentLocation)
    return <MapView 
        style={styles.map}
        // initialRegion={{
        //     latitude: 37.33233141,
        //     longitude: -122.0312186,
        //     latitudeDelta: 0.01,
        //     longitudeDelta: 0.01
        // }}
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}

        region={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
    >
        {/* <Polygon coordinates={points}/> */}
        <Circle 
            center={currentLocation.coords}
            radius={30}
            strokeColor="rgba(158, 158, 255, 1.0)"
            fillColor="rgba(158, 158, 255, 0.3)"
        />
    </MapView>
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})
export default Map
