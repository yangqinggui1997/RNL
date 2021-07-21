import React, { useContext } from 'react'
import {View, StyleSheet} from 'react-native'
import { Context as AuthContext} from '../context/AuthContext'
import Spacer from '../components/Spacer'
import { Button, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'

const AccountScreen = () => {
    const {signout} = useContext(AuthContext)

    return <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={{fontSize: 48}}>AccountScreen</Text>
            <Spacer>
                <Button onPress={signout} title="Sign out"/>
            </Spacer>
        </SafeAreaView>
}

const styles = StyleSheet.create({})

export default AccountScreen
