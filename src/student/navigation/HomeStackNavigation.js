import React, {useEffect, useState} from 'react';

// Import navigation 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, TextInput, Button} from 'react-native';
import { Block, Text, Card } from 'galio-framework';
import { CoachProfileCard } from '../components/CoachProfileCard';
import { SearchScreenRenderCards } from '../screens/RenderCards';
import { NativeBaseProvider } from 'native-base/src';


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



const SearchScreenDisplayCard = () => {
    return(
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Block style={{ flex:1, justifyContent:'center', alignItems:'center'}} >
            <Text>This is SearchScreenDisplayCard</Text>
        </Block>
    </View>
    )
};

const HomeStackNav = () => {
    return(
       
            <Stack.Navigator>
                
                <Stack.Screen name='Search' component={SearchScreen} />
                <Stack.Screen name='Render' component={SearchScreenRenderCards} />
                <Stack.Screen name='DisplayCard' component={SearchScreenDisplayCard} />
                
            </Stack.Navigator>
        
    );
};


export default HomeStackNav;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F8EDEB',
        paddingHorizontal: 20,
        paddingVertical: 64
    },
    card: {
        backgroundColor: '#fff',
        padding: 8,
        width: '80%',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 4,
        elevation: 7
    },
    texts:{
        color:'#707070',
        fontSize: 18
    },
    cardImageRadius:{
        borderRadius: 55/2
    }
})