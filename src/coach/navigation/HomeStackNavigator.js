import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, TextInput, Button} from 'react-native';

//Screens
import { HomeScreen } from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();

export default HomeStackNav = () => {
return(
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
            name='Home1'
            component={HomeScreen}
            />
    </Stack.Navigator>
    )
}

