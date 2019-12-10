import * as React from 'react';
import { View, Text,StyleSheet,Image } from 'react-native'
import {SharedElement} from 'react-navigation-shared-element';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  mainimage:{
    height:'100%',
    width:'100%'
  }
});

const Location = ({navigation}) => (

  
  
    <View style= {styles.container}>
    <SharedElement id="image" style={StyleSheet.absoluteFill}>
     <Image source={navigation.state.params.trip.image} style={styles.mainimage} resizeMode="cover"/>
     </SharedElement>
    </View>
  
);

Location.sharedElements = (navigation, otherNavigation, showing) => [
  {id: 'image'},
];

export default Location