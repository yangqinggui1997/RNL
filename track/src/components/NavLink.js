import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import Spacer from './Spacer'

const NavLink = (props) => {
    return <TouchableOpacity onPress={() => props.navigation.navigate(props.routeName)}>
        <Spacer>
            <Text style={styles.link}>{props.text}</Text>
        </Spacer>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
})

export default withNavigation(NavLink)
