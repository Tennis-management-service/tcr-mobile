import React from 'react';

// Import navigation 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, TextInput, Button} from 'react-native';

const Stack = createNativeStackNavigator();

const SearchScreen =  ({ navigation }) => {
    return(
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>This is SearchScreen</Text>
            <TextInput style={{backgroundColor:'white'}}/>
            <Button 
                title='Render'
                onPress={() => {navigation.navigate('Render')}} 
            />

        </View>
    )
};
const SearchScreenRender = ({ navigation }) => {
    return(
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>This is SearchScreenRender</Text>
            <Button 
                title='Display Card'
                onPress={() => {navigation.push('DisplayCard')}} 
            />
        </View>
    )
}
const SearchScreenDisplayCard = () => {
    return(
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>This is SearchScreenDisplayCard</Text>
    </View>
    )
}

const HomeStackNav = () => {
    return(
       
            <Stack.Navigator>
                <Stack.Screen name='Search' component={SearchScreen} />
                <Stack.Screen name='Render' component={SearchScreenRender} />
                <Stack.Screen name='DisplayCard' component={SearchScreenDisplayCard} />
            </Stack.Navigator>
        
    );
}


export default HomeStackNav;