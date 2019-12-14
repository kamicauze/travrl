import React, { Component } from 'react';
import { Text, StyleSheet, View,ScrollView,FlatList,ImageBackground,Animated,SafeAreaView,TouchableHighlight, TouchableOpacity,Dimensions,Image,Modal } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {SharedElement} from 'react-navigation-shared-element';

import Carousel from 'react-native-snap-carousel';

import TouchableScale from 'react-native-touchable-scale';
const { width, height } = Dimensions.get('window')



export default class MyCarousel extends Component {
    state= {
        cards:[
            {
                text:"Mt Kenya",
                image:require('../images/mountkenya.jpg'),
                profileImage:require('../images/profile.jpeg'),
                param:"mt-kenya",
                post_id:325,
                comments:[
                    {
                        id:243,
                        author_id:12,
                        author_name:"Kamicauze",
                        text:"Awesome planning to go there next year ",
                        parent_id: null
                    },
                    {
                        id:254,
                        author_id:12,
                        author_name:"Cheru",
                        text:"Ayyaaaaya @chemu tunaenda lini? " ,
                        parent_id:null  
                    },
                    {
                        id:255,
                        author_id:12,
                        author_name:"Chemu",
                        text:"This place is chilly...",  
                        parent_id: 254
                    },
                ],
                
            },
            {
                text:"Malindi",
                image:require('../images/malindi.jpg'),
                profileImage:require('../images/face2.jpeg'),
                param:"malindi",
                post_id:326,
                comments:[
                    {
                        id:243,
                        author_id:12,
                        author_name:"Kamicauze",
                        text:"Awesome planning to go there next year ",
                        parent_id: null
                    },
                    {
                        id:254,
                        author_id:12,
                        author_name:"Cheru",
                        text:"Ayyaaaaya @chemu tunaenda lini? " ,
                        parent_id:null  
                    },
                    {
                        id:255,
                        author_id:12,
                        author_name:"Chemu",
                        text:"This place is chilly...",  
                        parent_id: 254
                    },
                ],
                
            },
            {
                text:"Egypt",
                image:require('../images/cairo.jpg'),
                profileImage:require('../images/face3.jpeg'),
                param:"cairo",
                post_id:326,
                comments:[
                    {
                        id:243,
                        author_id:12,
                        author_name:"Kamicauze",
                        text:"Awesome planning to go there next year ",
                        parent_id: null
                    },
                    {
                        id:254,
                        author_id:12,
                        author_name:"Cheru",
                        text:"Ayyaaaaya @chemu tunaenda lini? " ,
                        parent_id:null  
                    },
                    {
                        id:255,
                        author_id:12,
                        author_name:"Chemu",
                        text:"This place is chilly...",  
                        parent_id: 254
                    },
                ],
                
            },{
                text:"Johannesburg",
                image:require('../images/johannesburg.jpg'),
                profileImage:require('../images/profile.jpeg'),
                param:"malindi",
                post_id:326,
                comments:[
                    {
                        id:243,
                        author_id:12,
                        author_name:"Kamicauze",
                        text:"Awesome planning to go there next year ",
                        parent_id: null
                    },
                    {
                        id:254,
                        author_id:12,
                        author_name:"Cheru",
                        text:"Ayyaaaaya @chemu tunaenda lini? " ,
                        parent_id:null  
                    },
                    {
                        id:255,
                        author_id:12,
                        author_name:"Chemu",
                        text:"This place is chilly...",  
                        parent_id: 254
                    },
                ],
                
            },
            {
                text:"Masaimara",
                image:require('../images/masaimara.jpg'),
                profileImage:require('../images/roba.jpeg'),
                param:"masaimara",
                post_id:327,
                comments:[
                    {
                        id:243,
                        author_id:12,
                        author_name:"Kamicauze",
                        text:"Awesome planning to go there next year ",
                        parent_id: null
                    },
                    {
                        id:254,
                        author_id:12,
                        author_name:"Cheru",
                        text:"Ayyaaaaya @chemu tunaenda lini? " ,
                        parent_id:null  
                    },
                    {
                        id:255,
                        author_id:12,
                        author_name:"Chemu",
                        text:"This place is chilly...",  
                        parent_id: 254
                    },
                ],
                
            },
        ],
    }

    _renderItem = ({item, index}) => {
        return (
            <TouchableScale
        style={styles.flex}
        activeScale={0.9}
        tension={50}
        friction={7}
        useNativeDrive onPress={() => this.props.navigation.navigate('Location',{
                trip:item
                })}>
                       <View style={styles.placecard}>
                       <SharedElement id="image" style={{height:'99%',width:'99%'}}>
                <Image style={{height:'100%',width:'100%'}}
                 source= {item.image}
                >
                    
                </Image>
                </SharedElement>
               <LinearGradient
        colors={['transparent', 'transparent', '#0e0e0ed9', 'black']}
        style={{flex: 1,width:"100%",position: 'absolute',
           left: 0,
           top:0,
           padding:20,
           justifyContent:'flex-end',
           right: 0,
           bottom: 0,zIndex:2}}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >

      <Image source={item.profileImage}  style={[{marginHorizontal:10,width: 50, height: 50, borderRadius: 50/ 2}],styles.profileImage} /> 
        <Text style={styles.placetext}>{item.text}</Text>
        <View style={styles.box1}>
            <View style={styles.box}>
                <Icon name='cards-heart' size={25} color="red"/>
                <Text style={styles.notactive}>300+</Text>
            </View>
            <View style={styles.box}>
                <Icon name='comment-multiple' size={25} color="snow"/>
                <Text style={styles.notactive}>2673</Text>
            </View>
        </View>
       
</LinearGradient>
            </View>
            </TouchableScale>
        );
    }

    render () {
        return (
            <Carousel layout={'stack'} 
            layoutCardOffset= {18}
             firstItem={2}
              ref={(c) => { this._carousel = c; }}
              data={this.state.cards}
              renderItem={this._renderItem}
              sliderHeight={360}
              itemHeight={360}
              sliderWidth={360}
              itemWidth={320}
            />
        );
    }
}
const styles = StyleSheet.create({
    
    box1:{
        flexDirection:'row',
        
    },
    box:{
        flexDirection:'row',
        width:100
    },
    placecard:{
        // flex:1,
        height:height*0.4,
        width:360,
        overflow: 'hidden',
        // borderRadius:7,
        borderColor:'black',
        color:'black',
        justifyContent:"center",
        alignItems:'center'
    },
    
    notactive:{
        fontSize:18,
        fontWeight:"100", 
        marginHorizontal:10,
        color:"whitesmoke"
    },
    placeholder:{
        flex: 1,
        alignItems:'center',
    },
    activedot:{fontSize:48,
        fontWeight:'900',
        lineHeight:26,
        color:"orange"
    },

    placetext:{
        fontSize:36,
        fontWeight:'bold',
        color:'snow'

    },
    profileImage:{
        marginHorizontal:10,width: 50, height: 50,
        borderRadius: 50/ 2,
        borderColor:'orange',
        borderWidth:2,
        position:"absolute",
        top:20,
        right:50,
    }

});