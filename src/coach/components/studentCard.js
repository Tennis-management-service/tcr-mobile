import React, {useState}from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { borderRadius } from 'styled-system';

export const StudentCard = ({imageUrl, name}) => {

  return (
    <View style={styles.container}>
            <View style={styles.imagePlacement}>
            <Image style={styles.image} source={{uri: imageUrl}} />
            </View>
            <View style={styles.textPlacement}>
            <Text style={styles.textName} >{name}</Text>
            </View>
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
        borderWidth: 1,
        borderColor: '#f5f0df',
        borderRadius: 13,

        //Margin
        marginRight: 4,
        marginLeft: 4,
        marginTop: 10,

        //Shadow
        padding: 2,
        
    }, 
    image:{
        backgroundColor: 'yellow',
        height: 70,
        width: 70,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 12,
    },
    textName: {
        flexDirection: 'row-reverse',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'notoserif',
        color: 'black'
    },
    textPlacement: {
        marginRight: 70,
    },
    imagePlacement: {
        marginLeft: 20,
        flexDirection: 'row',
       
    }
});


// Box shadow function to configure later. 
// const generateBoxShadowStyle = (
//     xOffset,
//     yOffset,
//     shadowColorIos,
//     shadowOpacity,
//     shadowRadius,
//     elevation,
//     shadowColorAndroid,
//   ) => {
//     if (Platform.OS === 'ios') {
//       styles.boxShadow = {
//         shadowColor: shadowColorIos,
//         shadowOffset: {width: xOffset, height: yOffset},
//         shadowOpacity,
//         shadowRadius,
//       };
//     } else if (Platform.OS === 'android') {
//       styles.boxShadow = {
//         elevation,
//         shadowColor: shadowColorAndroid,
//       };
//     }
//   };