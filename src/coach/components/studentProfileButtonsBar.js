import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text} from 'react-native'


export const StudentProfileButtonsBar = () => {
  return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.buttons, styles.button1]}>
            <Text style={styles.text}>Call</Text>
        </TouchableOpacity>
        <View style={styles.border}/>
        <TouchableOpacity style={[styles.buttons, styles.button2]}>
            <Text style={styles.text}>Hello</Text>
        </TouchableOpacity>
        <View style={styles.border}/>
        <TouchableOpacity style={[styles.buttons, styles.button3]}>
            <Text style={styles.text}>World</Text>
        </TouchableOpacity>
    </View>

  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        
        width: "94%",
        aspectRatio: 10/2,
        
        // Content placement
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

        //Border
        borderRadius: 13,

        //Margin
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,

        // Shadow
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 4,
        // },
        // shadowOpacity: 0.50,
        // shadowRadius: 4.90,
        // elevation: 8,
    },
    buttons:{
        // borderWidth: 1,
        // paddingTop: 30,
        // paddingBottom: 30,
        // paddingLeft:45,
        // paddingRight: 45,
        padding: 18,
    
    },
    button1:{
        backgroundColor: '#78ccf0',
        borderRadius: 13,
    },
    button2:{
        backgroundColor: '#78ccf0',
        borderRadius: 13,
        // paddingLeft: 37, 
        // paddingRight: 37
    },
    button3:{
        backgroundColor: '#78ccf0',
        borderRadius: 13,
    },
    // border:{
    //     backgroundColor: 'red',
    //     height: 10,
    //     border: 2,
    // },

    text:{
        fontSize: 19, 
        fontWeight: 'bold',
        color: 'black',
    }

});