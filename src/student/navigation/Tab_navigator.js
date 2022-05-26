import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Search_screen from "../components/Search_screen";
import Settings from '../components/Settings';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
    <Tab.Navigator>
        <Tab.Screen 
            name = 'Search_screen'
            component={Search_screen}/>
        <Tab.Screen 
            name = 'Settings'
            component={Settings} />
    </Tab.Navigator>
    );
}

export default TabNavigator;