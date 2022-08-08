import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export const ClubPostsScreen = ({props}) => {
    const screenWidth = props.screenWidth;
    let data = props.data;
    console.log('Data in clubPostScreen: ', data[0].desc);

    let cards = [];
    for(let i=0; i<data.length; i++){
        
        cards.push(
            <View style={styles.card}>

                {data[i].name ? <Text style={styles.nameText} key={i+2}>{data[i].name}</Text> : null}
                {data[i].desc ? <Text style={styles.descText}  key={i+1}>{data[i].desc}</Text>: null}
                {data[i].image ? <Image key={i+3} style={styles.image} source={{uri: data[i].image}}/> : null}

                
            </View>
        )
    }
  return (

    <View style={[styles.container, {width: screenWidth}]}>
        {cards}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    card:{
        flex:1,
        marginTop: 10,
        padding: 5,
        backgroundColor: '#dff5f4',

        //Border
        borderWidth: 1,

    },
    nameText:{
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5,
        marginBottom: 5,
    },
    descText:{
        fontSize: 15,
        marginTop: 5,
        marginBottom: 5,
    }, 
    image:{
        marginTop: 5,
        height: 300,
        width: "90%",
        resizeMode: 'stretch'
    }
})

