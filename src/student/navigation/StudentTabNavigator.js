import React from 'react';
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

import HomeStackNav from './HomeStackNavigator';
import SettingsStackNav from './SettingsStackNavigator';

const TabNavigator = () => {
    
    return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackNav} />
        <Tab.Screen name="Settings" component={SettingsStackNav} />
      </Tab.Navigator>
    </NavigationContainer>
    );
}



export default TabNavigator;