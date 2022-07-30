import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const ClubNotAssigned = ({props, nav}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.touchableOpacity}
          onPress={() => {
            nav.navigate('Add Club');
          }}>
          <Text style={styles.text}>Add Club + </Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height: '100%',
    flexDirection: 'column',

    
  },
  touchableOpacity:{
    backgroundColor: 'green',

    //height
    height: "10%",

    //margin
    margin: "4%",

    //contentPlacement
    justifyContent: 'center',
    alignItems: 'center',

    //container design
    borderRadius: 10,
  }, 
  text: {
    color: "white",
  }
})