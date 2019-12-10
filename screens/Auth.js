import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default class Auth extends Component {
    render() {
        return (
            <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('../images/wallp2.jpg')}>
            <LinearGradient
        colors={['transparent', 'transparent', '#0e0e0ed9', 'black']}
        style={{flex: 1,width:"100%",position: 'absolute',
           left: 0,
           top:0,
           padding:20,
           alignItems:"center",
           justifyContent:'flex-end',
           right: 0,
           bottom: 0,zIndex:2}}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
                <Text style={styles.Landingtext}>TRAVRL</Text>

                <TouchableOpacity  style={styles.Button} onPress={() => this.props.navigation.navigate('Welcome')}>
          <Text style={styles.ButtonText}>Login</Text>
          </TouchableOpacity>
               </LinearGradient> 
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    imgBackground:{
        flex: 1,
        alignItems:"center",
        justifyContent:'center'
    },
    Landingtext:{
        position: 'absolute',
        top:'50%',
        fontSize:52,
        fontWeight:'bold',
        color:'white'
        
    },
    Button: {
        display: 'flex',
        height: 50,
        width: 300,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        backgroundColor: 'white',
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },  
    ButtonText: {
        fontSize: 20,
        fontWeight:'bold',
        textTransform: 'uppercase',
        color: 'black',
    },
})

