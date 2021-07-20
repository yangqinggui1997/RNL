import createDataContext from "./createDataContext"
import trackAPI from '../api/track'

const authReducer = (state, action) => {
    switch(action.type)
    {
        default: return state
    }
}

const signup = (dispatch) => {
    return async (props) => {
        try
        {
            const response = await trackAPI.post('/signup', {email: props.email, password: props.password})
            console.log(response.data)
        }
        catch(err)
        {
            console.log(err.message)
        }
    }
}

const signin = (dispatch) => {
    return (props) => {
        
    }
}

const signout = (dispatch) => {
    return (props) => {
        
    }
}

export const {Context, Provider} = createDataContext(authReducer, {signin, signout, signup}, {
    isSignedIn: false,

})