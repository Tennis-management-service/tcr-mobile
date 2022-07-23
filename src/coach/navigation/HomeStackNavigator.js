import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, TextInput, Button} from 'react-native';

//Screens
import { CalendarScreen } from '../screens/CalendarScreen';


const Stack = createNativeStackNavigator();

export default HomeStackNav = () => {
return(
    <Stack.Navigator initialRouteName='Calendar'>
        <Stack.Screen
            name='Calendar1'
            component={CalendarScreen}
            />
    </Stack.Navigator>
    )
}

