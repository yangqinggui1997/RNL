import createDataContext from "./createDataContext"
import trackAPI from '../api/track'
import { AsyncStorage } from "react-native"
import { navigate } from "../navigationRef"

const authReducer = (state, action) => {
    switch(action.type)
    {
        case 'add_error': 
            return {...state, errorMessage: action.payload}
        case 'signin':
            return {errorMessage: '', token: action.payload}
        case 'signout':
            return {errorMessage: '', token: null}
        case 'clear_error_message': 
            return {...state, errorMessage: ''}
        default: return state
    }
}

const signup = (dispatch) => {
    return async (props) => {
        try
        {
            const response = await trackAPI.post('/signup', {email: props.email, password: props.password})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signin', payload: response.data.token})
            navigate('TrackList')
        }
        catch(err)
        {
            dispatch({type: 'add_error', payload: 'Something went wrong with sign up'})
        }
    }
}

const signin = (dispatch) => {
    return async (props) => {
        try
        {
            const response = await trackAPI.post('/signin', {email: props.email, password: props.password})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signin', payload: response.data.token})
            navigate('TrackList')
        }
        catch(err)
        {
            dispatch({type: 'add_error', payload: 'Something went wrong with sign in'})
        }
    }
}

const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token')
        dispatch({type: 'signout'})
        navigate('loginFlow')
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if(token)
    {
        dispatch({type: 'singin', payload: token})
        navigate('TrackList')
    }
    else
        navigate('Signin')
}
const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'})
}
export const {Context, Provider} = createDataContext(authReducer, {signin, signout, signup, clearErrorMessage, tryLocalSignin}, {
    token: null,
    errorMessage: ''
})