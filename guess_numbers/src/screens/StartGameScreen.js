import React, { useState } from 'react'
import { Alert, Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import BodyText from '../components/BodyText'
import Card from '../components/Card'
import Input from '../components/Input'
import MainButton from '../components/MainButton'
import NumberContainer from '../components/NumberContainer'
import TitleText from '../components/TitleText'
import Colors from '../constants/Colors'

const StartGameScreen = props => {
    const [enteredValue, setEnterValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = inputText => {
        setEnterValue(inputText.replace(/[^0-9]/g, ''))
    }
    const resetInputHandler = () => {
        setEnterValue('')
        setConfirmed(false)
        setSelectedNumber()
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if(isNaN(chosenNumber)|| chosenNumber <= 0 || chosenNumber > 99)
        {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{
                        text: 'Okay', 
                        style: 'destructive',
                        onPress: resetInputHandler
                    }]
                )
            return;
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnterValue('')
        Keyboard.dismiss()
    }

    let confirmedOutput;
    if(confirmed)
    {
        confirmedOutput = <Card style={styles.summaryContainer}>
            <BodyText>You selected</BodyText>
            <NumberContainer>
                <Text>{selectedNumber}</Text>
            </NumberContainer>
            <MainButton onPress={() => props.onStartGame(selectedNumber)}>
                START GAME
            </MainButton>
        </Card>
    }
    return <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}} >
            <View style={styles.screen}>
                <TitleText styles={styles.title}>The Game Screen!</TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a Number</BodyText>
                    <Input styles={styles.input} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2} onChangeText={numberInputHandler} value={enteredValue}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: 300,
        maxHeight: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 80
    },
    input: {
        width: 50,
        textAlign: 'center',
        padding: 0
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
})

export default StartGameScreen
