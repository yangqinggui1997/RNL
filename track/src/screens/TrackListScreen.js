import React, { useContext } from 'react'
import {View, StyleSheet, Text, Button, TouchableOpacity, FlatList} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'
import {ListItem} from 'react-native-elements'

const TrackListScreen = (props) => {
    const {state, fetchTracks} = useContext(TrackContext)

    return <>
        <NavigationEvents onWillFocus={fetchTracks}/>
        <Text style={{fontSize: 48}} >TrackListScreen</Text>
        <FlatList
            data={state}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => props.navigation.navigate('TrackDetail', {_id: item._id})}>
                    <ListItem>
                        <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    </TouchableOpacity>
                );
            }}
        />
    </>
}

const styles = StyleSheet.create({})

export default TrackListScreen
