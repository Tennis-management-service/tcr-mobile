/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { Platform} from 'react-native';

// Import navigators

import { SafeAreaView } from 'react-native-safe-area-context';
// import StackNavigator from './src/student/navigation/Stack_navigation';
import StudentTabNavigator from './src/student/navigation/StudentTabNavigator';
import CoachTabNavigator from './src/coach/navigation/CoachTabNavigator';

import { NativeBaseProvider } from 'native-base';



function App(){

  const user = 'coach';

   return(

    Platform.OS === 'ios' ?

      user === 'student' ?
        <NavigationContainer>
          <SafeAreaView>
            <StudentTabNavigator/>
          </SafeAreaView>
        </NavigationContainer>

        :
        <NavigationContainer>
        <SafeAreaView>
          <CoachTabNavigator/>
        </SafeAreaView>
        </NavigationContainer>
     
      :

      user === 'student' ?
        <NavigationContainer>
            <StudentTabNavigator/>
        </NavigationContainer>
      :
        <NavigationContainer>
          <CoachTabNavigator/>
        </NavigationContainer>
    
   );  
 }


 export default App;