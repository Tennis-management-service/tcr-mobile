/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { Platform } from 'react-native';

// Import navigators

import { SafeAreaView } from 'react-native-safe-area-context';
// import StackNavigator from './src/student/navigation/Stack_navigation';
import TabNavigator from './src/student/navigation/Tab_navigator';



function App(){
   return(

    Platform.OS === 'ios' ?

      <NavigationContainer>
        <SafeAreaView>
          <TabNavigator/>
        </SafeAreaView>
      </NavigationContainer>
      :
      <NavigationContainer>
          <TabNavigator/>
      </NavigationContainer>
    
   );  
 }


 export default App;