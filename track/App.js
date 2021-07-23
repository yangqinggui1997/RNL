import React from "react"
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { Provider as AuthProvider } from './src/context/AuthContext'
import { setNavigator } from "./src/navigationRef";
import ResovleAuthScreen from "./src/screens/ResovleAuthScreen";
import {Provider as LocationProvider} from './src/context/LocationContext'
import { Provider as TrackProvider } from "./src/context/TrackContext";
import Icon from "react-native-ico-material-design"

const TrackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
})

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResovleAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    TrackListFlow: TrackListFlow,
    CreateTrack: TrackCreateScreen,
    Account: AccountScreen
  }, 
  {
    tabBarOptions: {
      activeTintColor: '#000000',
      // activeBackgroundColor: '#007acc',
      labelStyle: {
        fontSize: 12,
        color: '#000000',
        // marginBottom: 15
      },
      style: {
        backgroundColor: '#FFFFFF'
      },
      showLabel: false
    }
  }
  )
},
{
  initialRouteName: 'ResolveAuth'
}
)
TrackListFlow.navigationOptions = {
  tabBarIcon: <Icon name="view-list-button"/>
}
TrackCreateScreen.navigationOptions = {
  tabBarIcon: <Icon name="add-plus-button"/>
}
AccountScreen.navigationOptions = {
  tabBarIcon: <Icon name="settings-cogwheel-button"/>
}

const App = createAppContainer(switchNavigator)

export default () => {
  return <TrackProvider>
            <LocationProvider>
              <AuthProvider>
                <App ref={(navigator) => {setNavigator(navigator)}}/>
              </AuthProvider>
            </LocationProvider>
          </TrackProvider> 
  
  
}