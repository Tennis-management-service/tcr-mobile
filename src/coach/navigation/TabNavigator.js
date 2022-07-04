import React from 'react';
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

import HomeStackNav from './HomeStackNavigator';
import StudentStackNav from './StudentsStackNavigator';
import ClubStackNav from './ClubStackNavigator'

const TabNavigator = () => {
    
    return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackNav} />
        {/* The Home Screen will render scheduled practices.
             */}
        <Tab.Screen name="Students" component={StudentStackNav} />
        {/* The Students Screen will be a stack navigator.
            It will render all the students assigned to the coach.
            Somewhere we need to have notifications for  */}
        <Tab.Screen name="Club" component={ClubStackNav}/>
        {/* The Club Screen will be a stack navigator. 
            It will render the registered club for the coach.
            If there is no registered club, there will be a button to search and register a club.  */}
        <Tab.Screen name="Notifications" />
        {/* This screen will render all notifications for the coach.
            These notifications can be new students, post from club, etc.. */}
        <Tab.Screen name="Profile" />
      </Tab.Navigator>
    </NavigationContainer>
    );
}



export default TabNavigator;