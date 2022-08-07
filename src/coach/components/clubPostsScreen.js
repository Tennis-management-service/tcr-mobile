import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const ClubPostsScreen = ({props}) => {
    const screenWidth = props.screenWidth;
  return (
    <View style={[styles.container, {width: screenWidth}]}>
        <Text>Render Content here</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{

    },
})
