import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text} from 'react-native'


export const StudentProfileButtonsBar = () => {
  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttons}>
            <Text>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
            <Text>Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
            <Text>World</Text>
        </TouchableOpacity>
    </View>

  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#78ccf0',
        
        height: 100,
        
        // Content placement
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        //Border
        borderRadius: 13,

        //Margin
        marginRight: 4,
        marginLeft: 4,
        marginTop: 10,

        //Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4.90,

        elevation: 8,
        
    },
    buttons:{
        margin: 10,

    }

});