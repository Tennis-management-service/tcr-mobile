// import * as React from 'react';
// import {
//     Text,
//     View,
// } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// function SearchScreen ({navigation})  {
//     return(
//     <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Search!</Text>
//     </View>
//     );
// }

// function Settings () {
//     return (
//         <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
//             <Text>Settings screen</Text>
//         </View>
//     )
// }

// const BottomTabBar = ({ state, descriptors, navigation }) =>{
//     return(
//         <View style={{ flexDirection: 'row' }}>
//             {state.routes.map((route, index) =>{
//                 const {options} = descriptors[route.key];
//                 const label = 
//                     options.tabBarLabel !== undefined
//                     ? options.tabBarLabel
//                     : options.title !== undefined
//                     ? options.title
//                     :route.name;
//                 const isFocused = state.index === index;
                
//                 const onPress = () => {
//                     const event = navigation.emit({
//                         type: 'tabPress',
//                         target: route.key
//                     });
//                     if (!isFocused && !event.defaultPrevented){
//                         navigation.navigate(route.name);
//                     }
//                 };
                
//                 const onLongPress = () => {
//                     navigation.emit({
//                         type: 'tabLongPress',
//                         target: route.key,
//                     });
//                 };

//                 return (
//                     <TouchableOpacity
//                     accessibilityRole='button'
//                     accessibilityState={isFocused ? {selected: true} : {}}
//                     accessibilityLabel={options.tabBarAccessibilityLabel}
//                     testID={options.tabBarTestID}
//                     onPress={onPress}
//                     onLongPress={onLongPress}
//                     style={{ flex:1 }}
//                     >
//                         <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
//                             {label}
//                         </Text>
//                     </TouchableOpacity>
//                 )
//             })}
//         </View>
//     )
// }


// export default {BottomTabBar, SearchScreen, Settings};





import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

DetailsScreen=(props) =>{
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

HomeScreen =({ navigation })=> {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

 SettingsScreen = ({ navigation })=> {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

module.exports =  HomeStackScreen= (props) =>{
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

 module.exports = SettingsStackScreen=() => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings1" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

