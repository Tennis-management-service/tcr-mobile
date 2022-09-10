import React from 'react'
import {ActivityIndicator, View, Text, Image, StyleSheet } from 'react-native'

export const SplashScreen = ({navigation}) => {
    setTimeout(function(){
        navigation.navigate('SignIn')
    }, 1000)
  return (
    <View style={styles.container}>
        
        <Image 
            style={styles.image}
            source={{
                uri:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
            }}
        />
        <ActivityIndicator size={'small'}/>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: "100%",
        borderWidth: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    image:{
        height: 100,
        width: 100,
        borderRadius: 40, 
        marginBottom: '20%'
    }
})
