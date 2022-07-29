import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import { alignItems } from 'styled-system';

export const StudentProfileTennisInfoCard = () => {
  return (
    <View style={styles.container}>
        <View style={styles.subContainers}>
            <Text style={styles.text}>TENNIS LEVEL</Text>
            <Text style={[styles.text, styles.textNumbers]}>number</Text>
        </View>
        <View style={styles.subContainers}>
            <Text style={styles.text}>utr ranking</Text>
            <Text style={[styles.text, styles.textNumbers]}>number</Text>
        </View>
        <View style={styles.subContainers}>  
            <Text style={styles.text}>usta ranking</Text>
            <Text style={[styles.text, styles.textNumbers]}>number</Text>
        </View>
        <View style={styles.subContainers}>
            <Text style={styles.text}>itf ranking</Text>
            <Text style={[styles.text, styles.textNumbers]}>number</Text>
        </View>
    </View>
    
    
  )
}


const styles = StyleSheet.create({
    container:{

        //Box Style
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,

        //Content
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 2,

        //Colors
        backgroundColor: 'brown',

        //Border
        borderRadius: 14,

        //Shadow
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,

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
    textNumbers:{
        color: 'red',
    },
});