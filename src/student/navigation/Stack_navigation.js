import React from 'react';



// Import screens
import Search_result from '../components/Search_result';
import Settings from '../components/Settings';
import Search_screen from '../components/Search_screen';

// Import navigation 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Search_Screen = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen 
                name='Search_screen'
                component={Search_screen}
                />
            <Tab.Screen
                name='Settings'
                component={Settings}
                />
        </Tab.Navigator>
    );
}

const StackNavigator = () => {
    return(
        // Render the search screen with two tabs for first time users.
        <Stack.Navigator>
            <Stack.Screen 
                name={'SearchScreen'} 
                component={Search_Screen}
                options={({navigation, route})=>{
                    
                }} />
        </Stack.Navigator>
        // Render screen with home coach settings tabs and messanger tab.
    )
}

export default StackNavigator;