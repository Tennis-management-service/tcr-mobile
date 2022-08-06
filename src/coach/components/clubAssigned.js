import React from "react"
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { FlatlistImageSlider } from "./flatlistImageSlider";

export const ClubAssigned = () => {

  //Calculates screen width
  const screenWidth = Math.round(Dimensions.get('window').width);


  //Props to pass in FlatListImageSlider
  const flatListProps = {
    screenWidth: screenWidth,
    separatorWidth: 0,
    animation:true,
    indicator: true,
    autoScroll: true,
    index: 0,
    indicator: true,
    indicatorActiveColor: "#FFFF00",
    indicatorInActiveColor: "#C0C0C0",
    indicatorActiveWidth: 40,
    indicatorStyle: {},
  }

  

  
    return (
      <View style={styles.container}>
        <FlatlistImageSlider props={flatListProps} />
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    
  }
});



const ChildrenStyle = StyleSheet.create({
  container: {
    flex:1 
  },
  image: {
      height: 230,
      resizeMode: 'stretch',
  },
})