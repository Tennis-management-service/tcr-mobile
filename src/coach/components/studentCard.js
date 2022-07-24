import React, {useState}from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export const StudentCard = ({imageUrl, name, navigation}) => {

    // const [usename, setname] = useState('');
    // setname(name);
  return (
    <TouchableOpacity onPress={
        () => {
                navigation.navigate('StudentProfile', {
                    userId: name,
                })}
            }>
    <View style={styles.container}>
            <View style={styles.imagePlacement}>
            <Image style={styles.image} source={{uri: imageUrl}} />
            </View>
            <View style={styles.textPlacement}>
            <Text style={styles.textName} >{name}</Text>
            </View>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#78ccf0',
        
        height: 100,
        
        // Content placement
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        //Border
        borderRadius: 13,

        //Margin
        marginRight: 4,
        marginLeft: 4,
        marginTop: 10,

        //Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4.90,

        elevation: 8,
        
    }, 
    image:{
        backgroundColor: 'yellow',
        height: 70,
        width: 70,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 12,
    },
    textName: {
        flexDirection: 'row-reverse',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'notoserif',
        color: 'black'
    },
    textPlacement: {
        marginRight: 70,
    },
    imagePlacement: {
        marginLeft: 20,
        flexDirection: 'row',
       
    }
});


// Box shadow function to configure later. 
// const generateBoxShadowStyle = (
//     xOffset,
//     yOffset,
//     shadowColorIos,
//     shadowOpacity,
//     shadowRadius,
//     elevation,
//     shadowColorAndroid,
//   ) => {
//     if (Platform.OS === 'ios') {
//       styles.boxShadow = {
//         shadowColor: shadowColorIos,
//         shadowOffset: {width: xOffset, height: yOffset},
//         shadowOpacity,
//         shadowRadius,
//       };
//     } else if (Platform.OS === 'android') {
//       styles.boxShadow = {
//         elevation,
//         shadowColor: shadowColorAndroid,
//       };
//     }
//   };