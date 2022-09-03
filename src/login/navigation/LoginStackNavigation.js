import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SplashScreen } from '../screens/SplashScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { SignInScreen } from '../screens/SignInScreen';
import { AddInformationScreen } from '../screens/AddInformationScreen';

const Stack = createNativeStackNavigator();

export const LoginStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen
            name='SplashScreen'
            component={SplashScreen}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen 
            name='SignUp' 
            component={SignUpScreen}
        />
        <Stack.Screen 
            name='SignIn'
            component={SignInScreen}
        />
        <Stack.Screen
            name='AddInformation'
            component={AddInformationScreen}
        />
    </Stack.Navigator>
  )
}
