import React, { useContext } from 'react'
import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Context} from '../context/BlogContext'
// import SearchIcon from '@material-ui/icons/Search';
import Icon from 'react-native-ico-material-design';

const IndexScreen = (props) => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context)

    return <View>
        <Button title="Add Post" onPress={addBlogPost}/>
        <FlatList
            data={state}
            keyExtractor={blogPost => blogPost.id}
            renderItem={({item}) => {
                return <TouchableOpacity onPress={() => props.navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Icon name="rubbish-bin-delete-button" color='red'/>
                            </TouchableOpacity>
                        </View>
                </TouchableOpacity>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})

export default IndexScreen
