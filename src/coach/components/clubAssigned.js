import React from "react"
import {View, Text, StyleSheet} from 'react-native';

export const ClubAssigned = () => {
    return (
      <View style={styles.container}>
        <Text>Club</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    
  }
});