import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, TextInput, Button} from 'react-native';

//Screens
import { StudentScreen } from '../screens/StudentScreen';

const Stack = createNativeStackNavigator();

export default StudnetStackNav = () => {

    return(
    <Stack.Navigator initialRouteName='Students'>
        <Stack.Screen
            name='Studnets'
            component={StudentScreen}
            />
    </Stack.Navigator>
    )
}
