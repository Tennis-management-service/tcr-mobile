import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, TextInput, Button} from 'react-native';

//Screens
import { ProfileScreen } from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export const ProfileStackNav = () => {

    return(
    <Stack.Navigator initialRouteName='Profile'>
        <Stack.Screen
            name='Profile1'
            component={ProfileScreen}
            />
    </Stack.Navigator>
    )
}
