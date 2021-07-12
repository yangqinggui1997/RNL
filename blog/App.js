import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import Icon from "react-native-ico-material-design"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { Provider } from "./src/context/BlogContext"
import { CommentContext } from './src/context/CommentContext'
import CreateScreen from "./src/screens/CreateScreen"
import EditScreen from "./src/screens/EditScreen"
import IndexScreen from "./src/screens/IndexScreen"
import ShowScreen from "./src/screens/ShowScreen"

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    initialRouteName: 'Index'
  }
);

ShowScreen.navigationOptions = (props) => {
  return {
    headerRight: () => <TouchableOpacity onPress={() => props.navigation.navigate('Edit', {id: props.navigation.getParam('id')})}>
          <Icon style={style.icon} name="horizontal-line-remove-button"/>
      </TouchableOpacity>,
      title: 'Blog post detial'
  }
}

CreateScreen.navigationOptions = (props) => {
  return {
      title: 'Create Screen'
  }
}

EditScreen.navigationOptions = (props) => {
  return {
      title: 'Edit Screen'
  }
}

IndexScreen.navigationOptions = (props) => {
  return {
      headerRight: () => <TouchableOpacity onPress={() => props.navigation.navigate('Create')}>
          <Icon style={style.icon} name="add-plus-button"/>
      </TouchableOpacity>,
      title: 'Index Screen'
  }
}

const style = StyleSheet.create({
  icon: {
    marginRight: 10
  }
})

const App = createAppContainer(navigator)
export default () => {
  return <Provider>
        <CommentContext>
          <App/>
        </CommentContext>
  </Provider>
}