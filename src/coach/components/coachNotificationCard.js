import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'




export const CoachPostNotification = ({props}) => {
 
  
  
  
  //Check if there is picture.
  return (
    <View style={props.style.cardContainer}>
        <Image style={props.style.profileImage} source={({uri: props.data.profileImage})} />
        <View style={props.style.textContainer}>
          <Text style={props.style.nameText} >{props.data.name}</Text>
          <Text> posted</Text>
          {props.data.image ? <Text> a picture in</Text> : <Text> in</Text>}
          <Text> {props.data.club}</Text>
        </View>
    </View>
  )
}

