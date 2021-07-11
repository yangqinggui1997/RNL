
// import { Search } from '@material-ui/icons';
import React from 'react'
import { StyleSheet, Text, TextInput, View, ViewPropTypes } from 'react-native'

const SearchBar = (props) => {
    return <View style={style.background}>
        {/* <Search/> */}
        <TextInput style={style.inputType} placeholder="Please input search" value={props.term} onChangeText={props.onTermChange} onEndEditing={props.onTermSubmit} autoCapitalize='none' autoCorrect={false}/>
    </View>
}

const style = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    inputType: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar
