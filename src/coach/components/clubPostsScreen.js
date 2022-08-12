import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, Button, Modal} from 'react-native'
import { FadeIn } from 'react-native-reanimated';

const LikePost = (likeCount) => {
    const [LikeCount, setLikeCount] = useState(likeCount);
    return(
        
            <Button 
                title='Like' 
                onPress={() => {
                    setLikeCount(LikeCount+1);
                }}
                style={styles.likeButton} />
       
    )
}




const Comments = (data, visibility) => {
    const [isVisible, setVisible] = useState(visibility);
    return(
        <Button 
            title='Comment'
            onPress={() => {setVisible(!isVisible)}}
            style={styles.commentButton}
            />
    )
}

export const ClubPostsScreen = ({props}) => {
    const screenWidth = props.screenWidth;
    let data = props.data;
    console.log('Data in clubPostScreen: ', data[0].desc);

    let cards = [];
    for(let i=0; i<data.length; i++){
        
        cards.push(
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    {data[i].profileImage ? <Image style={styles.profileImage} key={i+3} source={{uri: data[i].profileImage}}/>: null }
                    {data[i].name ? <Text style={styles.nameText} key={i+2}>{data[i].name}</Text> : null}
                </View>
                {data[i].desc ? <Text style={styles.descText}  key={i+1}>{data[i].desc}</Text>: null}
                {data[i].image ? <Image key={i+3} style={styles.image} source={{uri: data[i].image}}/> : null}
                <View style={styles.buttonBottomBar}>
                    {data[i].likes ? <LikePost likeCount={data[i].likes} /> : null}
                    {data[i].comments ? <Comments visibility={false}/> : null}
                </View>
                <Modal 
                    style={{flex:1}}
                    onRequestClose={() => {}}
                    animated={FadeIn}
                    visible={true}>
                    
                    <View style={{width: 200, height: 300}}>
                        <Text>{data[i].desc}</Text>
                    </View>
                </Modal>
                
            </View>
        )
    }
  return (

    <View key={0} style={[styles.container, {width: screenWidth}]}>
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
        marginBottom: 10,
        padding: 5,
        backgroundColor: '#dff5f4',

        //Border
        borderWidth: 1,

    },
    cardHeader: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    profileImage: {
        height: 70,
        width: 70,
        

        //Position
        
    },
    nameText:{
        fontWeight: 'bold',
        fontSize: 15,
        
        margin: 15,
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
    }, 
    likeButton:{
        height: 20,
        width: 30,
    },
    commentButton:{

    },
    buttonBottomBar:{
        flexDirection: 'row',
    }
})

