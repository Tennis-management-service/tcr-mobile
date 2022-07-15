import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, TextInput, Button} from 'react-native';

//Screens
import { StudentScreen } from '../screens/StudentScreen';
import { StudentProfileScreen } from '../screens/StudentProfileScreen';

const Stack = createNativeStackNavigator();

export default StudnetStackNav = () => {

    return(
    <Stack.Navigator initialRouteName='Students'>
        <Stack.Screen
            name='Studnets'
            component={StudentScreen}
            />
        <Stack.Screen
            name='StudentProfile'
            component={StudentProfileScreen}
            options={{name:'SS'}}
            />
    </Stack.Navigator>
    )
}
