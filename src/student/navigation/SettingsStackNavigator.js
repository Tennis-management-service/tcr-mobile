import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View, Text } from 'react-native';


const Stack = createNativeStackNavigator();

const SettingsScreen = () => {
    return(
        <View>
            <Text>This is SettingsScreen</Text>
        </View>
    );
}


const SettingsStackNav = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Settings00' component={SettingsScreen}/>
        </Stack.Navigator>
    )
}

export default SettingsStackNav;