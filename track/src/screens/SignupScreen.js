import React, { useContext, useState } from 'react'
import {View, StyleSheet} from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext'

const SignupScreen = (props) => {
    const {state, signup} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return <View style={styles.container}>
        <Spacer>
            <Text h3>Sign Up for Tracker</Text>
        </Spacer>
        <Input label="Email" onChangeText={(value) => {setEmail(value)}} autoCorrect={false} autoCapitalize="none" />
        <Input label="Password" onChangeText={(value) => {setPassword(value)}} autoCorrect={false} secureTextEntry autoCapitalize="none" />
        <Spacer>
            <Button title="Sign up" onPress={() => signup({email, password})}/>
        </Spacer>
    </View>
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
})

export default SignupScreen
