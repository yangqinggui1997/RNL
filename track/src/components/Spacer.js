import React from 'react'
import { StyleSheet, View } from 'react-native'

const Spacer = (props) => {
    return <View style={styles.spacer}>{props.children}</View>
}

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    }
})
export default Spacer
