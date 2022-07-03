import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


export const CoachProfile = ({route, navigation}) => {
    const {name, email} = route.params;

    return(
        <View>
            <Text>This is Coach {name}</Text>
            <Text>This is my email: {email}</Text>
        </View>
    )
}