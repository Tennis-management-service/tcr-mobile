import React from "react"
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import { ClubCoachesRosterCard } from "./clubCoachesRosterCard";
import { ClubPostInput } from "./clubPostInput";
import { ClubPostsScreen } from "./clubPostsScreen";
import { FlatlistImageSlider } from "./flatlistImageSlider";

export const ClubAssigned = ({props, nav}) => {

  //Calculates screen width
  const screenWidth = Math.round(Dimensions.get('window').width);


  const DATA = [
    {
      id: '1dvds',
      name: 'Spyridon Kaperonis',
      rank:'Director',
      likes: 5,
      comment: true,
      comments: [
        {
          id: '0001',
          comment: 'Awesome picture my friend',
        },
        {
          id: '0002',
          comment: 'AersomePicture of mountainsA ersomePicture of mountains',
        },
        {
          id: '0003',
          comment: 'Awesome picture my frsdsddiend',
        },
        {
          id: '0004',
          comment: 'Awesome picture my friend',
        },
        {
          id: '0005',
          comment: 'Awesome picture my friend',
        },
        {
          id: '0006',
          comment: 'Awesome picture my friend',
        },
        {
          id: '0007',
          comment: 'Awesome picture my friend',
        },
      ],
      profileImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      image:
        'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      id: '2xc',
      name: 'Spyridon Kaperonis',
      rank:'Head Coach',
      likes: 4,
      comment: true,
      comments: [
        {
          id: 'sldjfssssspttssslfjsld',
          comment: 'Awesome picture',
        }
      ],
      profileImage: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      image:
        'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      id: '3zxzx',
      name: 'Spyridon Kaperonis',
      rank:'Tennis Pro',
      likes: 2,
      comment: true,
      comments: [
        {
          id: 'sldjfslfjaasld',
          comment: 'Awesome picture',
        },
        
      ],
      profileImage: 'https://images.unsplash.com/photo-1525550557089-27c1bfedd06c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
    {
      id: '4dvbn',
      name: 'Spyridon Kaperonis',
      rank:'Tennis Pro',
      likes: 7,
      comment: true,
      comments: [
        {
          id: 'sldjfeeslfjttsld',
          comment: 'Awesome picture',
        }
      ],
      profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      image:
        'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
    {
      id: '5kjl',
      name: 'Spyridon Kaperonis',
      rank:'Tennis Pro',
      likes: 1,
      comment: true,
      comments: [
        {
          id: 'stldjfslyyfjsld',
          comment: 'Awesome picture',
        }
      ],
      profileImage: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      image:'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      desc:'Sample Description below the image for representation purpose only',
    },
  ];

  //Props to pass in FlatListImageSlider
  const flatlistImageSliderProps = {
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

  const clubCoachesRosterCardProps = {
    data: DATA,
    screenWidth: screenWidth,
  }

  const clubPostInputProps = {
    screenWidth: screenWidth,
    navigation: nav,
  }

  const clubPostsScreenProps = {
    data: DATA,
    screenWidth: screenWidth
  }

  
  function keyGenerator() {
    const key = Math.random().toString(16).substring(2,8);
    console.log('Key ', key);
    return key;
  }
  
    return (
      <View style={styles.container}>
        <ScrollView>
          
          <FlatlistImageSlider props={flatlistImageSliderProps} />
          <ClubCoachesRosterCard props={clubCoachesRosterCardProps}/>
          <ClubPostInput props={clubPostInputProps}/>
          <ClubPostsScreen props={clubPostsScreenProps}/>
          
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    height: "100%",
    justifyContent: 'center'
    
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