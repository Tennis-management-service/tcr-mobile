import React, {useState}from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export const CalendarRenderItemCard = ({startTime, endTime, title}) => {

  return (
    
    <View style={styles.container}>
            
            <Text style={styles.textTime}>{startTime + ' ' + endTime}</Text>
            <Text style={styles.textName} >{title}</Text>
            
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#78ccf0',
        
        height: 100,
        
        // Content placement
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',

        //Border
        borderRadius: 13,

        //Margin
        marginRight: 4,
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
    
    textTime:{
        margin: 10,
        fontSize: 21,
        fontWeight: 'bold',
        borderWidth: 1,
        color: 'black'

    },
    textName:{
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
        borderWidth: 1,
    }
});