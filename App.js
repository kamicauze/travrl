import React from 'react';
import { StyleSheet, Text, View,Dimensions,Image } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import { createStackNavigator, HeaderTitle  } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {springyFadeIn} from './transitions/springyFadeIn.js';


import { } from 'react-native-gesture-handler'

import Welcome from './screens/Welcome.js'
import Add from './screens/Add.js'
import Profile from './screens/Profile.js'
import Location from './screens/Location.js'
import Auth from './screens/Auth.js'
import Notifications from './screens/Notifications.js'
import Discover from './screens/Discover.js'


// const AppContainer = createAppContainer(AppNavigator);
class LogoTitle extends React.Component {
  render() {
    return (
     <View style={styles.headContent}>
       <Text style={{fontSize:16,fontWeight:'bold',marginRight: 10,}}>Chemu</Text>
     <Image
                    source={require('./images/profile.jpeg')}  
                    style={{marginHorizontal:10,width: 40, height: 40, borderRadius: 40/ 2}} 
                />
     </View>
    );
  }
}

const bottomnav = createMaterialBottomTabNavigator(
  {
    Welcome: {screen:Welcome,},
    Discover: {screen:Discover},
    Add: {screen:Add,},
    Notifications:{screen:Notifications},
    Profile: {screen:Profile,},
  },
  {
    showIcon: true ,
    initialRouteName: 'Welcome',
    inactiveColor: '#f0edf6',
    activeColor: 'orange',
    barStyle: { backgroundColor: '#263238',padding:10 },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon:({focused, tintColor})=>{
        let iconName;
        const {routeName} = navigation.state
        if (routeName === 'Add') {
          iconName = "plus-square-o";
        } else if (routeName === 'Profile') {
          iconName = "user";
        } else if (routeName === 'Welcome'){
          iconName = "home"
        }else if (routeName=== 'Notifications'){
          iconName= "bell-o"
        } else {
          iconName= "search"
        }
    
        return <Icon  name={iconName} size={25} color={tintColor} />
        }
    })
  });
  const Navigator = createSharedElementStackNavigator(
  createStackNavigator,
  {
    Discover:{screen:bottomnav,navigationOptions: {
      headerStyle: {
        backgroundColor: '#263238',
      },
      headerTitle:"TRAVLR",
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
     }}},
    Location:{screen:Location,
    navigationOptions:{
      headerTitle:"TRAVLR",
      headerRight:<LogoTitle/>
      // headerRight: ()=>{
      //   <LogoTitle/>
      // }
        
        
      }
    }
    
  },{
    transitionConfig: () => springyFadeIn(),
  },)

  const Switchnav = createSwitchNavigator({
    Login:{screen:Auth},
    Discover:{screen:Navigator}
  })

const NavContainer = createAppContainer(Switchnav)

export default function App() {
  return (
   <NavContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headContent:{
    flexDirection:'row',
   justifyContent:'center',
   alignItems:'center',
   
  }
});
