import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
        <Text>This is SplashScreen</Text>
        <Image 
            style={styles.image}
            source={{
                uri:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
            }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: "30%",
        marginTop: "50%", 
        borderWidth: 1, 
    },
    image:{
        height: 100,
        width: 100
    }
})
