import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import { ClubScreen } from '../screens/ClubScreen';
import { ClubAddScreen } from '../screens/ClubAddScreen';


const Stack = createNativeStackNavigator();

export default ClubStackNav = () => {

    return(
        <Stack.Navigator initialRouteName='Club'>
            <Stack.Screen
                name='Club'
                component={ClubScreen}
                />
            <Stack.Screen
                name='Add Club'
                component={ClubAddScreen}
                />
        </Stack.Navigator>
    )
}
