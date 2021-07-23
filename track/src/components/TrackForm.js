import React, { useContext } from 'react'
import { View } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import Spacer from './Spacer'
import {Context as LocationContext} from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
    const {state: {name, recording, locations, totalLocationSlices}, startRecording, stopRecording, changeName} = useContext(LocationContext)

    const [saveTrack, saveAllTrack] = useSaveTrack();
    return <>
        <Spacer>
            <Input placeholder="Enter name" value={name} onChangeText={changeName}></Input>
        </Spacer>
        <Spacer>
            {recording 
            ? 
            <Button title="Stop" onPress={stopRecording}/> 
            : 
            <Button title="Start Recording" onPress={startRecording}/>}
        </Spacer>
        <Spacer>
            {
                !recording && locations.length ? <Button title="Save lastest recording" onPress={saveTrack}/> : null
            }
        </Spacer>
        <Spacer>
            {
                !recording && totalLocationSlices.length > 1 ? <Button title="Save all recording" onPress={saveAllTrack}/> : null
            }
        </Spacer>
    </>
}

export default TrackForm
