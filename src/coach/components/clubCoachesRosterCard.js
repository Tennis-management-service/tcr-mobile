import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';




const CoachCard = ({width, data, name, rank}) => {
   
    return(
        <View style={[styles.card, {width:width-30}]}>
            <Image style={styles.image} source={{uri: data}}/>
            <View style={{flex:1}}>
                <Text style={styles.cardText}>{'Name: '+name}</Text>
                <Text style={styles.cardText}>{'Rank: '+rank}</Text>
            </View>
        </View>
    )
}


export const ClubCoachesRosterCard = ({props}) => {

    const ItemWidth = props.screenWidth;
    const separatorWidth = props.separatorWidth;
    const totalItemWidth = ItemWidth + separatorWidth;
    
    const data = props.data;

    return (
        <View style={styles.container}>
            <Text style={styles.flatlistHeadline}>COACH ROSTER</Text>
            <FlatList 
                style={styles.flatlist}
                data={data}
                horizontal={true}
                pagingEnabled={true}
                windowSize={1}
                bounces={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index)=> {index}}
                getItemLayout={(data, index) => ({
                    length: totalItemWidth,
                    offset: totalItemWidth * index,
                    index,
                  })}
                renderItem={({item, index}) => {
                    return (
                        <CoachCard 
                            width={props.screenWidth}
                            data={item.image}
                            name={item.name}
                            rank={item.rank}
                        />
                    )
                }}
                ItemSeparatorComponent={(item, index) => {
                    return <View style={styles.separator}/>
                }}
                contentContainerStyle={{
                  
                    height: 130,
                    marginLeft: 4,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    
                }}
               
            />
            
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 5,
        height: "10%",
        alignItems: 'center',
    },
    flatlistHeadline:{
        alignItems: 'center'
    },
    image:{
        height: "100%",
        width: "30%",
        marginRight: "5%",
    },
    card:{
        flexDirection: 'row',
        height: 90,
        marginLeft: 10, 
        marginRight: 20,

        resizeMode: 'stretch',
        backgroundColor: '#dff5f4',

        //Content
        alignItems: 'center',

        //Border
    },
    cardText:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    flatlist:{

    },
    separator: {
        height: "100%", 
        width: 1,
    }
});
