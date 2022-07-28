import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import { alignItems } from 'styled-system';

export const StudentProfileInformationCard = () => {
  return (
    <View style={styles.container}>
        <View style={styles.subContainers}>
            <Text style={styles.text}>TENNIS LEVEL</Text>
            <Text style={styles.text}>number</Text>
        </View>
        <View style={styles.subContainers}>
            <Text style={styles.text}>utr ranking</Text>
            <Text style={styles.text}>number</Text>
        </View>
        <View style={styles.subContainers}>  
            <Text style={styles.text}>usta ranking</Text>
            <Text style={styles.text}>number</Text>
        </View>
        <View style={styles.subContainers}>
            <Text style={styles.text}>itf ranking</Text>
            <Text style={styles.text}>number</Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{

        //Box Style
        marginRight: 10,
        marginLeft: 10,
        
        //Content
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 2,

        //Colors
        backgroundColor: 'brown',

        //Border
        borderWidth: 0.5,
        borderRadius: 15,

    },
    subContainers: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text:{
        backgroundColor:'yellow',
        borderWidth: 1,
        margin: 10, 

        //Font
        fontSize: 18,
        fontWeight: 'bold',

    },
});