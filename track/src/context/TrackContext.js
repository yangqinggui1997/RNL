import createDataContext from "./createDataContext"
import trackerApi from '../api/track'

const trackReducer = (state, action) => {
    switch(action.type)
    {
        case 'fetch_tracks':
            return action.payload;
        default: 
            return state;
    }
}

const fetchTracks = dispatch => async() => {
    const response = await trackerApi.get('/tracks').catch(error => console.log(error))
    dispatch({type: 'fetch_tracks', payload: response.data})
}
const createTrack = dispatch => async (name, locations) => {
    return await trackerApi.post('/tracks', {name, locations}).catch(error => console.log(error))
}

const createAllTrack = dispatch => async (name, totalLocationSlices) => {
    await totalLocationSlices.map(locations => {
        trackerApi.post('/tracks', {name, locations}).catch(error => console.log(error))
    })
}

export const {Provider, Context} = createDataContext(
    trackReducer,
    {fetchTracks, createTrack, createAllTrack},
    []
)
