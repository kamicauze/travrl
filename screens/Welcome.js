import React, { Component } from 'react'
import { Text, StyleSheet, View,ScrollView,FlatList,ImageBackground,Animated,SafeAreaView,TouchableHighlight, TouchableOpacity,Dimensions,Image,Modal } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import  MyCarausel from '../components/carousel.js'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class Welcome extends Component {
    state = {
        activeIndex:2,
        // cards:[
        //     {
        //         text:"Mt Kenya",
        //         image:require('../images/mountkenya.jpg'),
        //         profileImage:require('.../images/profile.jpeg'),
        //         param:"mt-kenya",
        //         post_id:325,
        //         comments:[
        //             {
        //                 id:243,
        //                 author_id:12,
        //                 author_name:"Kamicauze",
        //                 text:"Awesome planning to go there next year ",
        //                 parent_id: null
        //             },
        //             {
        //                 id:254,
        //                 author_id:12,
        //                 author_name:"Cheru",
        //                 text:"Ayyaaaaya @chemu tunaenda lini? " ,
        //                 parent_id:null  
        //             },
        //             {
        //                 id:255,
        //                 author_id:12,
        //                 author_name:"Chemu",
        //                 text:"This place is chilly...",  
        //                 parent_id: 254
        //             },
        //         ],
                
        //     },
        //     {
        //         text:"Malindi",
        //         image:require('../images/malindi.jpg'),
        //         profileImage:require('.../images/face.jpeg'),
        //         param:"malindi",
        //         post_id:326,
        //         comments:[
        //             {
        //                 id:243,
        //                 author_id:12,
        //                 author_name:"Kamicauze",
        //                 text:"Awesome planning to go there next year ",
        //                 parent_id: null
        //             },
        //             {
        //                 id:254,
        //                 author_id:12,
        //                 author_name:"Cheru",
        //                 text:"Ayyaaaaya @chemu tunaenda lini? " ,
        //                 parent_id:null  
        //             },
        //             {
        //                 id:255,
        //                 author_id:12,
        //                 author_name:"Chemu",
        //                 text:"This place is chilly...",  
        //                 parent_id: 254
        //             },
        //         ],
                
        //     },
        //     {
        //         text:"Masaimara",
        //         image:require('../images/masaimara.jpg'),
        //         profileImage:require('.../images/profile.jpeg'),
        //         param:"masaimara",
        //         post_id:327,
        //         comments:[
        //             {
        //                 id:243,
        //                 author_id:12,
        //                 author_name:"Kamicauze",
        //                 text:"Awesome planning to go there next year ",
        //                 parent_id: null
        //             },
        //             {
        //                 id:254,
        //                 author_id:12,
        //                 author_name:"Cheru",
        //                 text:"Ayyaaaaya @chemu tunaenda lini? " ,
        //                 parent_id:null  
        //             },
        //             {
        //                 id:255,
        //                 author_id:12,
        //                 author_name:"Chemu",
        //                 text:"This place is chilly...",  
        //                 parent_id: 254
        //             },
        //         ],
                
        //     },
        // ],
        places:[
            {
                name:'Europe',
                key:28
            },
            {
                name:'America',
                key:29
            },
            {
                name:'Africa',
                id:30
            },
            {
                name:'Kenya',
                id:31
            },
            {
                name:'France',
                id:32
            },
            {
                name:'Italy',
                id:33
            },
            {
                name:'China',
                id:34
            },
            {
                name:'Dubai',
                id:35
            },
        ],
        faces:[
            {
                key:1,
                image:require('../images/profile.jpeg')
            },
            {
                key:2,
                image:require('../images/face2.jpeg')
            },
            {
                key:3,
                image:require('../images/face3.jpeg')
            },
            {
                key:4,
                image:require('../images/roba.jpeg')
            },
            {
                key:5,
                image:require('../images/face2.jpeg')
            },
            {
                key:6,
                image:require('../images/face3.jpeg')
            },
            {
                key:7,
                image:require('../images/roba.jpeg')
            },
        ]

    }
    render() {
        return (
            <View style={styles.container}>
    
                <View>
                <FlatList horizontal  style={styles.container2}
                data={this.state.places}
                extraData={this.state}
                  renderItem ={({item,index})=>(
             
             <TouchableHighlight onPress={() => {this.setState({ activeIndex:index })}}> 
              <View style={styles.placeholder}>
             <Text style={this.state.activeIndex === index ? styles.active_text : styles.notactive}>{item.name}</Text>
             <Text style={this.state.activeIndex == index ? styles.activedot : styles.dot}>.</Text>
             </View>
             </TouchableHighlight>
             
            ) }
        
                     keyExtractor={ ( item, index ) => `${index}` }
                 />
                </View>
           
        
            <View style={styles.cardsholder}>
                <MyCarausel navigation={this.props.navigation}/>
             </View>
            <View style={styles.myfriends}>
             <Text style={styles.myfriendstext}>Friends</Text>   
            <ScrollView horizontal>
            {this.state.faces.map( face =>{
                   return(
                    <Image key={face.key}
                    source={face.image}  
                    style={{marginHorizontal:10,width: 60, height: 60, borderRadius: 60/ 2}} 
                />   
                   )

               })}

            </ScrollView>
            </View>        
        </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 10,
       
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    box1:{
        flexDirection:'row',
        
    },
    box:{
        flexDirection:'row',
        width:100
    },
   container2:{
    //  flex:1,
     height:50,
    
   },
   
    placecard:{
        // flex:1,
        height:360,
        width:360,
        overflow: 'hidden',
        // borderRadius:7,
        backgroundColor:"#fff",
        color:'black',
        justifyContent:"center",
        alignItems:'center'
    },
    cardsholder:{
        flex: 1,
        paddingTop:50,
        alignItems:"center",
        flexDirection:'column',
        justifyContent:"center",
        height:370,
       
    },
    notactive:{
        fontSize:18,
        fontWeight:"100", 
        marginHorizontal:10,
        color:"whitesmoke"
    },
    active_text:{
      color:"orange",
      fontSize:22,
      fontWeight:"500", 
      marginHorizontal:10,
    }
,
    placeholder:{
        flex: 1,
        alignItems:'center',
    },
    activedot:{fontSize:48,
        fontWeight:'900',
        lineHeight:26,
        color:"orange"
    },
    dot:{
        fontSize:48,
        fontWeight:'900',
        lineHeight:26 ,
        color:'black' 
    },
    myfriends:{
    padding:30,
    justifyContent:"center",
   
    },
    myfriendstext:{
        fontSize:24,
        marginBottom:20,
        color:'snow',
        fontWeight:'900'
    },
    placetext:{
        fontSize:36,
        fontWeight:'bold',
        color:'snow'

    }
});