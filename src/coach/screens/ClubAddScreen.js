import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { ClubAddRenderBox } from '../components/clubAddRenderBox';

export const ClubAddScreen = () => {
  return (
    <View>
        <TextInput
          style={styles.input}
          placeholder="Club Name, Zip Code, Area"
          autoFocus={true}
          blurOnSubmit={true}
          contextMenuHidden={true}
          
        />
        <ClubAddRenderBox/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    input: {
      backgroundColor: 'yellow',
      fontSize: 18,
      

      
      
      //Placement
      marginTop: "2%",
      marginRight: "2%",
      marginLeft: "2%",
      marginBottom: "4%",

      //Border
      borderWidth: 0.6,
      borderColor: 'blue',
      borderRadius: 5,
    }
    
})
