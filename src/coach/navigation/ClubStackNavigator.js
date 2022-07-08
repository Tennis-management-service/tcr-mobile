import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, TextInput, Button} from 'react-native';

//Screens
import { ClubScreen } from '../screens/ClubScreen';

const Stack = createNativeStackNavigator();

export default ClubStackNav = () => {

    return(
        <Stack.Navigator initialRouteName='Club'>
            <Stack.Screen
                name='Club1'
                component={ClubScreen}
                />
        </Stack.Navigator>
    )
}
