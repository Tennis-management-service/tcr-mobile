import React from "react";
import { StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import { StudentProfileButtonsBar } from "../components/studentProfileButtonsBar";
import { StudentProfileImage } from "../components/studentProfileImage";

export const StudentProfileScreen = ({route}) => {
    const name0 = route.params.userId;
    

    return(
        <View style={styles.container}>
        <StudentProfileImage name={name0} imageUrl={'https://reactnative.dev/img/tiny_logo.png'}/>
        <StudentProfileButtonsBar/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
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
    },
    avatar:{
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        
    }
});