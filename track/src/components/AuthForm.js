import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import Spacer from './Spacer'

const AuthForm = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return <>
        <Spacer>
            <Text h3>{props.headerText}</Text>
        </Spacer>
        <Input label="Email" onChangeText={(value) => {setEmail(value)}} autoCorrect={false} autoCapitalize="none" />
        <Input label="Password" onChangeText={(value) => {setPassword(value)}} autoCorrect={false} secureTextEntry autoCapitalize="none" />
        { props.errorMessage ? <Text style={styles.errorMessage}>{props.errorMessage}</Text> : null }
        <Spacer>
            <Button title={props.submitButtonText} onPress={() => props.onSubmit({email, password})}/>
        </Spacer>
    </>
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
})

export default AuthForm
