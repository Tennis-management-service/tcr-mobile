import React, {useState}from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export const StudentCard = ({imageUrl, name, navigation}) => {

    // const [usename, setname] = useState('');
    // setname(name);
  return (
    <TouchableOpacity
    style={styles.buttonContainer}
    onPress={
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
    buttonContainer:{
        height: "10%",
        backgroundColor: 'white'
    },
    container:{
        backgroundColor: '#78ccf0',
        
        height: 90,
        
        // Content placement
        flex: 1,
        flexDirection: 'row',
        alignContent: 'flex-start',
        

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
       
        borderWidth: 1,
        borderRadius: 12,
    },
    textName: {
        flexDirection: 'row-reverse',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'notoserif',
        color: 'black'
    },
    textPlacement: {
        marginLeft: 10,
        marginRight: 4,
        justifyContent: 'center',
        alignContent: 'center',
    },
    imagePlacement: {
        marginLeft: 7,
        justifyContent: 'center',
        alignContent: 'center',       
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