import React, { useCallback, useContext, useEffect, useState } from 'react'
import {Alert, StyleSheet} from 'react-native'
import { Text } from 'react-native-elements'
import { NavigationEvents, SafeAreaView, withNavigation, withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import TrackForm from '../components/TrackForm'
import {Context as LocationContext} from '../context/LocationContext'
import useLocation from '../hooks/useLocation'

const TrackCreateScreen = (props) => {
    const {state, addLocation, unreset} = useContext(LocationContext)
    const callback = useCallback((location) => {
      addLocation(location, state.recording)
    }, [state.recording])
    const restartLoc = useCallback(() => {
      unreset()
    })
    const [err] = useLocation(props.isFocused || state.recording, callback, state, restartLoc)

    return <SafeAreaView forceInset={{top: 'always'}}>
        <Text h2>Create a track</Text>
        <Map/>
        <NavigationEvents onWillBlur={() => {console.log('LEAVING')}}/>
        {err ? <Text>{err}</Text> : null}
        <TrackForm/>
    </SafeAreaView>
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)
