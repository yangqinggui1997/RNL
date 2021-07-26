import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import MainButton from '../components/MainButton'
import NumberContainer from '../components/NumberContainer'
import defaultStyles from '../constants/default-styles'
import Icon from 'react-native-ico-material-design'
import BodyText from '../components/BodyText'

const generateRandomBetween = params => {
    params.min = Math.ceil(params.min)
    params.max = Math.floor(params.max)
    const randNum = Math.floor(Math.random() * (params.max - params.min)) + params.min
    if(randNum === params.exclude)
        return generateRandomBetween({min: params.min, max: params.max, exclude: params.exclude})
    else
        return randNum
}

const renderListItem = (guess, numberOfRound) => <View key={guess} styles={styles.listItem}>
    <BodyText>#{numberOfRound}</BodyText>
    <BodyText>{guess}</BodyText>
</View>
const GameScreen = props => {
    const initialGuess = generateRandomBetween({min: 1, max: 100, exclude: props.userChoice})
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [pastGuesses, setPastGuesses] = useState([initialGuess])

    const currentLow = useRef(1)
    const currentHigh = useRef(100)
    const {userChoice, onGameOver} = props
    useEffect(() => {
        if(currentGuess === userChoice)
            onGameOver(pastGuesses.length)
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice))
        {
            Alert.alert("Don't lie!", "You know that this is wrong...", [{text: 'Sorry', style: 'cancel'}])
            return;
        }
        if(direction === 'lower')
            currentHigh.current = currentGuess
        else
            currentLow.current = currentGuess + 1
        const nextNumber = generateRandomBetween({min: currentLow.current, max: currentHigh.current, exclude: currentGuess})
        setCurrentGuess(nextNumber)
        setPastGuesses(curPassGuesses => [nextNumber, ...curPassGuesses])
    }
    return <View style={styles.screen}>
        <Text style={defaultStyles.title}>Opponent't Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
            <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Icon name='horizontal-line-remove-button' size={24} color='white'/>
            </MainButton>
            <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
                <Icon name='add-plus-button' size={24} color='white'/>
            </MainButton>
        </Card>
        <View style={styles.list}>
            <ScrollView>
                {pastGuesses.map((guess, i) => renderListItem(guess, pastGuesses.length - i))}
            </ScrollView>
        </View>
    </View>
}

const styles =  StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: 250,
        maxWidth: '80%'
    },
    listItem: {
        borderColor: '#ccc',
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    list: {
        width: '80%',
        flex: 1
    }
})

export default GameScreen
