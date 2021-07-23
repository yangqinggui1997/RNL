import { useContext } from "react";
import { Context as TrackContext } from '../context/TrackContext'
import { Context as LocationContext } from '../context/LocationContext'
import {navigate} from '../navigationRef'

export default () => {
    const {createTrack, createAllTrack} = useContext(TrackContext)
    const { state: {locations, totalLocationSlices, name}, reset} = useContext(LocationContext)

    const saveTrack = async () => {
        await createTrack(name, locations)
        reset()
        navigate('TrackList')
    }

    const saveAllTrack = async () => {
        await createAllTrack(name, totalLocationSlices)
        reset()
        navigate('TrackList')
    }

    return [saveTrack, saveAllTrack]
}