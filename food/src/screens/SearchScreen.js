
import React, {useState} from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import ResultsList from '../components/ResultsList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = (props) => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }
    return <View style={{marginLeft: 10, marginRight: 10, flex: 1}}>
        <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)}/>
        {errorMessage ? <Text>{errorMessage}</Text> : <Text>We have found {results.length} results</Text>}
        <ScrollView>
            <ResultsList navigation={props.navigation} results={filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultsList navigation={props.navigation} results={filterResultsByPrice('$$')} title="Bit Pricier"/>
            <ResultsList navigation={props.navigation} results={filterResultsByPrice('$$$')} title="Big Spender"/>
        </ScrollView>
        
    </View>
}

const style = StyleSheet.create({})

export default SearchScreen
