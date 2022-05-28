import React from 'react';
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

import HomeStackScreen from './Navigator'
import SettingsStackScreen from './Navigator'

function TabNavigator(){
    
    return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Home1" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    );
}



export default TabNavigator;