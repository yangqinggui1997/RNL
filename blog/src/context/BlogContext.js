import jsonserver from '../api/jsonserver'
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch(action.type)
    {
        case 'get_blogposts':
            return action.payload
        case 'add_blogpost':
            return [...state, {id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content}]
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost
            })
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default: return state;
    }
}
const getBlogPosts= dispatch => {
    return async () => {
        const response = await jsonserver.get('/blogposts')
        dispatch({type: 'get_blogposts', payload: response.data})
    }
}

const addBlogPost = (dispatch) => {
    return async (props, callback) => {
        await jsonserver.post('/blogposts', {title: props.title, content: props.content})
        callback()
    }
    // return (props, callback) => {
    //     dispatch({type: 'add_blogpost', payload: props})
    //     callback()
    // }
}

const editBlogPost = (dispatch) => {
    return async (props, callback) => {
        await jsonserver.put(`/blogposts/${props.id}`, {title: props.title, content: props.content})
        dispatch({type: 'edit_blogpost', payload: props})
        callback()
    }
    // return (props, callback) => {
    //     dispatch({type: 'edit_blogpost', payload: props})
    //     callback()
    // }
}

const deleteBlogPost = (dispatch) => {
    // return (id) => {dispatch({type: 'delete_blogpost', payload: id })}
    return async (id) => {
        await jsonserver.delete(`/blogposts/${id}`)
        dispatch({type: 'delete_blogpost', payload: id })
    }
}

export const {Context, Provider} = createDataContext(blogReducer, {getBlogPosts, addBlogPost, editBlogPost, deleteBlogPost}, [])