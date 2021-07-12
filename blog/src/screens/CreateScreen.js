import React, { useContext } from 'react'
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = (props) => {
    
    const {addBlogPost} = useContext(Context);

    return <BlogPostForm 
        onSubmit={(_props) => {
        addBlogPost({title: _props.title, content: _props.content}, () => props.navigation.navigate('Index'))
    }}/>
}

export default CreateScreen
