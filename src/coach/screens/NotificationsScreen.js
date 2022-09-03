import React from 'react'
import {View, Text, Dimensions, StyleSheet} from 'react-native';

import { CoachPostNotification } from '../components/coachNotificationCard';
import { dummyDATA } from '../../dummyData';
import { DummyDataPostNotifications } from '../dummyDataNotifications';

export const NotificationsScreen = ({navigation}) => {
  const screenWidth = Math.round(Dimensions.get('window').width);

  // Dummy data will be replaced by Coach_notifications table render for this coach.
  const data = DummyDataPostNotifications();

  const NotificationProps = {
    data: dummyDATA,
    screenWidth: screenWidth,
    image: true,

  }


  let cards = [];

  for(let i=0; i<data.length; i++){
    const props = {
      data:data[i],
      style: Styles,
    }
    cards.push(
      
      <View style={Styles.container}>
        
          <CoachPostNotification props={props}/>
          
      </View>
    )
  }


  return (
    //For loop to loop through data
    <View key={'14'} style={[Styles.container, {width: screenWidth}]}>
        {cards}
    </View>
  );
}

const Styles = StyleSheet.create({
    container:{
      
    
    },


    // CoachPostNotification Card Style bellow ----------------
    cardContainer:{
      flexDirection: 'row',
      margin: 3, 
      padding: 5, 
      alignItems: 'center', 

      backgroundColor: '#dff5f4',
      
    },
    profileImage: {
      height: 70, 
      width: 70,
      marginRight: 10, 
      borderRadius: 20,
    },
    textContainer:{
      flexDirection: 'row', 
    },
    nameText:{
      fontWeight: 'bold',
    },
   
   
    
})