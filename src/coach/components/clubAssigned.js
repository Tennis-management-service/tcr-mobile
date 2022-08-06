import React from "react"
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { FlatlistImageSlider } from "./flatlistImageSlider";

export const ClubAssigned = () => {

  //Calculates screen width
  const screenWidth = Math.round(Dimensions.get('window').width);


  const DATA = [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
    {
      id: '4',
      image:
        'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
    {
      id: '5',
      image:'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      desc:'Sample Description below the image for representation purpose only',
    },
  ];

  //Props to pass in FlatListImageSlider
  const flatListProps = {
    data: DATA,
    screenWidth: screenWidth,
    separatorWidth: 0,
    animation:true,
    indicator: true,
    autoScroll: true,
    loop: true,
    index: 0,
    timer:2000,
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