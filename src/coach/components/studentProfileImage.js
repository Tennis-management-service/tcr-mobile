import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


export const StudentProfileImage = ({name, imageUrl}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: imageUrl}}/>
        <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        backgroundColor: '#f2ecd5',
        alignItems: 'center',
        margin: 10,

        padding: 5,
        
        borderRadius: 10,

        // Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4.90,
        elevation: 8,

    },
    image:{
        margin: 8,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        height: 90,
        width: 100,
        borderRadius: 10,

    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
    }
});