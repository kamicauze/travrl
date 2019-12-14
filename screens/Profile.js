import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,FlatList,Dimensions,Button } from 'react-native'
const { width, height } = Dimensions.get('window')


// import Mytravels from './Mytavels.js'
// import Tagged from './Tagged.js'
export default class Profile extends Component {
    state = {
        cards:[
            {
              id:1,
              image:require('../images/vacation.jpeg')
            },
            {
              id:2,
              image:require('../images/friends1.jpg')
            },
            {
              id:3,
              image:require('../images/friends2.jpg')
            },
            {
              id:4,
              image:require('../images/vacation2.jpg')
            },
            {
              id:4,
              image:require('../images/malindi.jpg')
            },
            {
              id:5,
              image:require('../images/masaimara.jpg')
            },
          ]
    }

    render() {
        return (
            <View style={styles.container}>
               <View style={styles.header}>
                <View style={{flexDirection:"row"}}>   
               <Image  source={require('../images/profile.jpeg')} style={styles.profileImage} /> 
               <View>
               <Text style={styles.username}>Tess Maser</Text>
               <Text style={styles.description}>Bad bish...</Text>
               <View style={styles.followers}>
               <Text style={styles.followerhelpertext}>Followed by </Text>    
               <Text style={styles.followertext}>njuguna,kim</Text>
               <Text style={styles.followerhelpertext}> and</Text>
               <Text style={styles.followertext}>100 more </Text>
               </View>
               </View>
               </View>
                <View style={styles.calltoaction}>
                <View style={[{width:"48%"}]}>
                    <Button  title="Folllow" style={styles.calltoactionbtn}></Button>
                    </View>
                    <View style={[{width:"48%"}]}>
                    <Button  title="Message" style={styles.calltoactionbtn}>Message</Button>
                    </View>
                </View>
                <View style={styles.userFollows}>
                    <View style={styles.descbox}>
                        <Text style={styles.follownumber}>120</Text>
                        <Text style={styles.followdesc}>Followers</Text>
                    </View>
                    <View style={styles.descbox}>
                        <Text style={styles.follownumber}>634</Text>
                        <Text style={styles.followdesc}>Following</Text>
                    </View>
                    <View style={styles.descbox}>
                        <Text style={styles.follownumber}>45</Text>
                        <Text style={styles.followdesc}>Posts</Text>
                    </View>
                </View>
                </View> 
                <View style={styles.container}>
                <FlatList numColumns={2} data={this.state.cards}
              
                extraData={this.state} 
                renderItem ={({item,index})=>(
                  <Image key={item.id} style={styles.scrollimage} source={item.image}/>
                )}
                keyExtractor={ ( item, index ) => `${index}` }
                />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black'
    },
    header:{
    //   height: height * 0.3  ,
      backgroundColor:'#263238',
      width:'100%',
      padding:20,
      color:'white',
     
      
    },
    profileImage:{
       
        width: 70,
        height: 70, 
        borderRadius: 70/ 2,
        borderColor:'orange',
        borderWidth:2,
        marginRight: 20,
      
    },
    followers:{
      color:'white',
      flexDirection:'row',
      flexWrap: 'wrap',
    },
    followertext:{
        fontSize:16,
        fontWeight:'bold',
        color:'white',
    
        flexWrap: 'wrap',
    },
    username:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    description:{
        fontSize:20,
        color:'white'
    },
    followerhelpertext:{
        fontWeight:'400',
        fontSize:16,
        color:'white',
        
        flexWrap: 'wrap',
    },
    calltoaction:{
        marginTop:20,
        flexDirection:'row',
        width:'100%',
        
        justifyContent:'space-between'
    },
    userFollows:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
    },
    descbox:{
        alignItems:'center',
        justifyContent:'center',
       
    },
    follownumber:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    },
    followdesc:{
        color:'#f5f7fbb9',
        fontSize:16,
        
    },

    scrollimage:{
        height:height * 0.35,
        width:width * 0.45,
        borderRadius:10,
        margin:10,
      },

})
