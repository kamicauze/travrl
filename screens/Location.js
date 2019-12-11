import React, { Component } from 'react'
import { View, Text,StyleSheet,Image,Modal,ImageBackground,TouchableOpacity,ScrollView,FlatList ,TextInput  } from 'react-native'
import {SharedElement} from 'react-navigation-shared-element';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'





export default class Location extends Component {

  state = {
    modalVisible: true,
    cards:[
      {
        id:1,
        image:require('../images/friends3.jpeg')
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
        image:require('../images/roba.jpeg')
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
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    let params = this.props.navigation
    let comments = params.state.params.trip.comments
    return (
    <View  style={styles.container}>
    <SharedElement id="image" style={StyleSheet.absoluteFill}>
     <ImageBackground source={params.state.params.trip.image} style={styles.mainimage} blurRadius={5}>
     <View style={styles.overlay}>
     <View style={styles.images}>
              <FlatList horizontal data={this.state.cards}
              
                extraData={this.state} 
                renderItem ={({item,index})=>(
                  <Image key={item.id} style={styles.scrollimage} source={item.image}/>
                )}
                keyExtractor={ ( item, index ) => `${index}` }
                />

              
</View>
       <View style={styles.modalView}>
      

              <Text style={styles.commentHeader}>COMMENTS</Text> 
              <ScrollView>
                {comments.map(comment =>{
                    return (
                        <View key={comment.id} style={styles.comment}>
                        <Image
                    source={require('../images/profile.jpeg')}  
                    style={{marginHorizontal:10,width: 40, height: 40, borderRadius: 40/ 2}} 
                />
                <View style={{ flex: 1 }}>
                        <Text style={styles.commentAuth}>{comment.author_name}</Text>
                        <Text style={styles.commentText}>{comment.text}</Text>
                        <Text style={styles.commentTime}>3 d Reply</Text>
                        </View>
                        </View>
                    )
                })}
              </ScrollView>
              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Reply"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
  

       </View>         
     </View>
     </ImageBackground>
     </SharedElement>
     
    </View>
  
    )
  }
}


Location.sharedElements = (navigation, otherNavigation, showing) => [
  {id: 'image'},
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "flex-end",
    padding: 10,
  },
  mainimage:{
    height:'100%',
    width:'100%'
  },
  overlay:{
    flex: 1,
  
    alignItems:'center'
  },
  modalView:{
    height:400,
    width:'100%',
    padding:20,
   borderTopLeftRadius:10,
   borderTopRightRadius:10, 
    backgroundColor:"black",
    position:"absolute",
    bottom:0,
  },
  comment:{
    minHeight:100,
    flexDirection: 'row',
    marginBottom: 10,
    
    },
    commentText:{
      fontWeight:'400',
      color:'white',
      fontSize: 20,
      flexWrap: 'wrap',
    },
    commentTime:{
      fontWeight:'300',
      color:'grey',
      fontSize: 16,
      flexWrap: 'wrap',
    }
    ,commentHeader:{
      fontWeight:'500',
      color:'white',
      fontSize: 24,
      marginBottom: 20,
    },
    commentAuth:{
      fontWeight:'bold',
      color:'orange',
      
    },
    images:{
      flex:1,
      width:'100%',
      justifyContent: 'center', 
      alignItems: 'center',
      paddingTop: 50,
      
     
    },
    scrollimage:{
      height:350,
      width:250,
      borderRadius:10,
      marginHorizontal: 20,
    },
    input:{
      color:'white'
    }

});



