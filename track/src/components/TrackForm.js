import React, { useContext } from 'react'
import { View } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import Spacer from './Spacer'
import {Context as LocationContext} from '../context/LocationContext'

const TrackForm = () => {
    const {state: {name, recording, locations}, startRecording, stopRecording, changeName} = useContext(LocationContext)

    console.log(locations)
    return <>
        <Spacer>
            <Input placeholder="Enter name" value={name} onChangeText={changeName}></Input>
        </Spacer>
        {recording ? <Button title="Stop" onPress={stopRecording}/> : <Button title="Start Recording" onPress={startRecording}/>}
        
    </>
}

export default TrackForm
