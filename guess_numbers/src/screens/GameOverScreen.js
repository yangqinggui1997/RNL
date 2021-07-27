import React from 'react'
import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import BodyText from '../components/BodyText'
import MainButton from '../components/MainButton'
import TitleText from '../components/TitleText'
import Colors from '../constants/Colors'

const GameOverScreen = props => {
    return <ScrollView>
        <View style={styles.screen}>
            <TitleText>The game is over!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                source={require('../../assets/success.png')}
                // source={{uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_1280.jpg'}}
                style={styles.image} resizeMode='cover'/>
            </View>
            <View style={styles.resultContainer}>
                <BodyText styles={styles.resultText}>Your phone neede <Text style={styles.highlight}>{props.roundsNumber}</Text> {props.roundsNumber > 1 ? 'rounds' : 'round'} to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
            </View>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: (Dimensions.get('window').width * 0.7) / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }
})
export default GameOverScreen
