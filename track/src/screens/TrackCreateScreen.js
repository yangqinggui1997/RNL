import React, { useEffect, useState } from 'react'
import {StyleSheet} from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import * as Location from 'expo-location'
import Map from '../components/Map'

const TrackCreateScreen = () => {
    const [err, setErr] = useState('')

    const startWatching = async () => {
        try {
          const { status } = await Location.requestForegroundPermissionsAsync()
        //   if (status !== 'granted') {
        //     throw new Error('Location permission not granted')
        //   }
        } catch (e) {
          setErr(e.message)
        }
      }

    useEffect(() => {
        startWatching()
    }, [])

    return <SafeAreaView forceInset={{top: 'always'}}>
        <Text h2>Create a track</Text>
        <Map/>
        {err ? <Text>Please enable location services: {err}</Text> : null}
    </SafeAreaView>
}

const styles = StyleSheet.create({})

export default TrackCreateScreen
