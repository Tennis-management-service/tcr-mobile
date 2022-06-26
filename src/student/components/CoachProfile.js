import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


export const CoachProfile = ({navigation}, props) => {


    return(
        <View>
            <Text>This is Coach {props.name}</Text>
        </View>
    )
}