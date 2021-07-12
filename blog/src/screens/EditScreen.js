import React, { useContext} from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = (props) => {
    const id = props.navigation.getParam('id');
    const {state, editBlogPost} = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return <BlogPostForm 
        initialValues={{title: blogPost.title, content: blogPost.content}}
        onSubmit={(_props) => {
            editBlogPost({id, title: _props.title, content: _props.content}, () => props.navigation.navigate('Show'))
    }}/>
}

export default EditScreen
